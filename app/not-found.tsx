"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import gsap from "gsap";

export default function NotFound() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // GALAXY PARAMETERS
    const params = {
      count: 15000,
      size: 0.02,
      radius: 5,
      branches: 3,
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: '#ff6030',
      outsideColor: '#1b3984'
    };

    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.PointsMaterial | null = null;
    let points: THREE.Points | null = null;

    const generateGalaxy = () => {
      if (points !== null) {
        geometry?.dispose();
        material?.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(params.count * 3);
      const colors = new Float32Array(params.count * 3);

      const colorInside = new THREE.Color(params.insideColor);
      const colorOutside = new THREE.Color(params.outsideColor);

      for (let i = 0; i < params.count; i++) {
        const i3 = i * 3;

        // Position
        const radius = Math.random() * params.radius;
        const spinAngle = radius * params.spin;
        const branchAngle = (i % params.branches) / params.branches * Math.PI * 2;

        const randomX = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * params.randomness * radius;
        const randomY = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * params.randomness * radius;
        const randomZ = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * params.randomness * radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY; // Flat galaxy on XZ plane, actually let's tilt it later
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        // Color
        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, radius / params.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: params.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });

      points = new THREE.Points(geometry, material);

      // Tilt the galaxy to view it better
      points.rotation.x = 0.5;
      points.rotation.z = 0.2;

      scene.add(points);
    };

    generateGalaxy();

    // STAR CLUSTER (Background)
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPos = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      starsPos[i] = (Math.random() - 0.5) * 50;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 7;
    camera.position.y = 3;
    camera.lookAt(0, 0, 0);

    // MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.0001;
      mouseY = (event.clientY - windowHalfY) * 0.0001;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // ANIMATION
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate galaxy
      if (points) {
        points.rotation.y = elapsedTime * 0.05;
      }

      // Rotate starfield slowly
      starField.rotation.y = -elapsedTime * 0.01;

      // Subtle camera movement
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 5 + 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // GSAP Intro
    gsap.from(camera.position, {
      y: 10,
      z: 20,
      duration: 3,
      ease: "power3.out"
    });

    // RESIZE
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry?.dispose();
      material?.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#050510] overflow-hidden flex flex-col items-center justify-center text-center font-sans">
      <div ref={mountRef} className="absolute inset-0 z-0" />

      <div className="z-10 relative px-4 mix-blend-screen animate-fade-in-up">
        <h1 className="text-[120px] md:text-[180px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400 mb-0 font-mono tracking-tighter drop-shadow-[0_0_30px_rgba(100,100,255,0.5)]">
          404
        </h1>

        <div className="backdrop-blur-md bg-black/40 p-8 rounded-2xl border border-white/10 max-w-lg mx-auto mt-8 relative z-20 shadow-2xl overflow-hidden">
          {/* Noise Grain Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-light mb-4 text-white tracking-[0.2em] uppercase flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_#60a5fa]"></span>
              Lost in Deep Space
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_#60a5fa]"></span>
            </h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed font-light font-mono">
              You've drifted into a star-forming region. The coordinates you seek do not exist in this galaxy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group relative px-8 py-3 bg-blue-600/20 hover:bg-blue-600/40 rounded-full overflow-hidden transition-all border border-blue-400/30 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-blue-100 font-medium group-hover:tracking-wider transition-all duration-300 text-sm uppercase">
                  Return to Base
                </span>
              </Link>

              <Link
                href="/docs"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-white/50 pb-1"
              >
                Open Star Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
