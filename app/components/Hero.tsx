"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // SCENE SETUP
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050508, 0.0015); // Lighter fog for depth

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // TEXTURE GENERATOR
        const getSprite = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64; // Higher res
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            if (!ctx) return null;
            const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            grad.addColorStop(0, 'rgba(255,255,255,1)');
            grad.addColorStop(0.2, 'rgba(230,230,255,0.8)');
            grad.addColorStop(0.5, 'rgba(100,100,255,0.2)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 64, 64);
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        };

        // NEURAL SPHERE PARTICLES
        const particleCount = 2500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const color1 = new THREE.Color("#22d3ee"); // Cyan
        const color2 = new THREE.Color("#818cf8"); // Indigo
        const color3 = new THREE.Color("#c084fc"); // Purple

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            // Wider spread for breathing room
            const r = 5 + Math.random() * 4;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = r * Math.cos(phi);

            const mixedColor = color1.clone().lerp(color2, Math.random()).lerp(color3, Math.random());
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;

            sizes[i] = Math.random() * 2.0;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.08,
            map: getSprite() || undefined,
            transparent: true,
            opacity: 0.6,
            vertexColors: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // LOGO
        const textureLoader = new THREE.TextureLoader();
        const logoTexture = textureLoader.load('/reox.svg');
        logoTexture.minFilter = THREE.LinearFilter;

        // Logo Plane - Slightly larger
        const logoGeo = new THREE.PlaneGeometry(3.5, 3.5);
        const logoMat = new THREE.MeshBasicMaterial({
            map: logoTexture,
            transparent: true,
            opacity: 0.95,
            side: THREE.DoubleSide,
            depthTest: false
        });
        const logoMesh = new THREE.Mesh(logoGeo, logoMat);
        scene.add(logoMesh);

        // ORBITAL RINGS
        const createRing = (radius: number, count: number, axis: 'x' | 'y' | 'z') => {
            const ringGeo = new THREE.BufferGeometry();
            const ringPos = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2;
                if (axis === 'y') {
                    ringPos[i * 3] = Math.cos(angle) * radius;
                    ringPos[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
                    ringPos[i * 3 + 2] = Math.sin(angle) * radius;
                } else if (axis === 'x') {
                    ringPos[i * 3] = (Math.random() - 0.5) * 0.2;
                    ringPos[i * 3 + 1] = Math.cos(angle) * radius;
                    ringPos[i * 3 + 2] = Math.sin(angle) * radius;
                }
            }
            ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
            const ringMat = new THREE.PointsMaterial({ size: 0.04, color: 0xffffff, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending });
            return new THREE.Points(ringGeo, ringMat);
        };

        const ring1 = createRing(9, 400, 'y');
        ring1.rotation.x = Math.PI / 6;
        scene.add(ring1);

        const ring2 = createRing(11, 600, 'y');
        ring2.rotation.x = -Math.PI / 6;
        scene.add(ring2);

        // Move camera further back for space
        camera.position.z = 12;
        camera.position.y = 0;

        // INTERACTION
        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX) * 0.0002; // Reduced sensitivity
            mouseY = (event.clientY - windowHalfY) * 0.0002;
        };
        window.addEventListener('mousemove', onMouseMove);

        // ANIMATION
        const clock = new THREE.Clock();

        const animate = () => {
            const time = clock.getElapsedTime();

            particles.rotation.y = time * 0.03;
            particles.rotation.z = time * 0.01;

            const scale = 1 + Math.sin(time * 1.5) * 0.03;
            logoMesh.scale.set(scale, scale, scale);

            logoMesh.position.y = Math.sin(time * 0.8) * 0.2;
            logoMesh.rotation.y = Math.sin(time * 0.3) * 0.05;

            ring1.rotation.z = time * 0.05;
            ring2.rotation.z = -time * 0.04;

            camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
            camera.position.y += (-mouseY * 8 - camera.position.y) * 0.03;
            camera.lookAt(0, 0, 0);

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        gsap.from(camera.position, { z: 25, duration: 3, ease: "power4.out" });
        gsap.from(logoMesh.material, { opacity: 0, duration: 2, delay: 0.5 });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <section className="relative h-screen min-h-[800px] w-full flex flex-col items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div ref={mountRef} className="absolute inset-0 z-0" />

            {/* Spacer to push content down if needed, but centering is better */}

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pointer-events-none mt-20">
                <div className="animate-fade-in-up space-y-6">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        Reox
                    </h1>
                    <p className="text-2xl md:text-3xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                        The natural language of Artificial Intelligence.
                    </p>
                    <div className="flex justify-center gap-4 text-lg md:text-xl font-medium tracking-widest uppercase">
                        <span className="text-green-400">Native</span>
                        <span className="text-stone-500">•</span>
                        <span className="text-blue-400">Declarative</span>
                        <span className="text-stone-500">•</span>
                        <span className="text-purple-400">Safe</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pointer-events-auto animate-fade-in-up delay-[400ms] mt-16">
                    <Link href="/download" className="group relative px-10 py-5 bg-white text-black rounded-full transition-all overflow-hidden w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105">
                        <span className="relative z-10 font-bold text-lg flex items-center justify-center gap-2">
                            Get Started <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-[0.2em] border-b border-transparent hover:border-white/30 pb-1">
                        Documentation
                    </Link>
                </div>
            </div>

            {/* Bottom fade for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none z-20"></div>
        </section>
    );
}
