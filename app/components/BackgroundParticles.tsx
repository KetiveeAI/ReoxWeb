"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 2. PARTICLES SETUP
    const particleCount = 2500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#3b82f6"); // Primary Blue
    const color2 = new THREE.Color("#8b5cf6"); // Secondary Purple

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in a wide 3D space
      const x = (Math.random() - 0.5) * 1200;
      const y = (Math.random() - 0.5) * 1200;
      const z = (Math.random() - 0.5) * 800 - 200;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Random slow drift velocities
      velocities[i3] = (Math.random() - 0.5) * 0.2;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.2;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.2;

      // Mix colors based on random value
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Shader Material for glowing circular particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }
      },
      vertexShader: `
        attribute vec3 color;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (1200.0 / -mvPosition.z); // Perspective scaling
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          // Circular particle with soft edge
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.1, dist);
          gl_FragColor = vec4(vColor, alpha * 0.6); // 60% base opacity
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. MOUSE INTERACTION
    const mouse = new THREE.Vector2();
    let mouseActive = false;
    const raycaster = new THREE.Raycaster();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseActive = true;
    };

    const onMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // 4. ANIMATION LOOP
    const clock = new THREE.Clock();
    let animationFrameId: number;
    const target3D = new THREE.Vector3();

    const animate = () => {
      const time = clock.getElapsedTime();
      material.uniforms.uTime.value = time;

      // Update particle positions
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = positionsAttr.array;

      // Calculate true 3D mouse position on Z=0 plane
      if (mouseActive) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(mousePlane, target3D);
      }

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Base drift motion
        originalPositions[i3] += velocities[i3];
        originalPositions[i3 + 1] += velocities[i3 + 1];
        originalPositions[i3 + 2] += velocities[i3 + 2];

        // Wrap around bounds so they never fully disappear
        if (originalPositions[i3] > 600) originalPositions[i3] = -600;
        if (originalPositions[i3] < -600) originalPositions[i3] = 600;
        if (originalPositions[i3 + 1] > 600) originalPositions[i3 + 1] = -600;
        if (originalPositions[i3 + 1] < -600) originalPositions[i3 + 1] = 600;

        let targetX = originalPositions[i3];
        let targetY = originalPositions[i3 + 1];
        let targetZ = originalPositions[i3 + 2];

        // Mouse repulsion logic
        if (mouseActive) {
          const dx = originalPositions[i3] - target3D.x;
          const dy = originalPositions[i3 + 1] - target3D.y;
          // Ignore Z distance mostly for repulsion effect, just XY
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 150;
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            // Push outwards relative to mouse
            targetX += (dx / dist) * force * 50;
            targetY += (dy / dist) * force * 50;
            targetZ += force * 20; // Push slightly forward in Z
          }
        }

        // Spring physics: Lerp current position to target position
        posArray[i3] += (targetX - posArray[i3]) * 0.1;
        posArray[i3 + 1] += (targetY - posArray[i3 + 1]) * 0.1;
        posArray[i3 + 2] += (targetZ - posArray[i3 + 2]) * 0.1;
      }

      positionsAttr.needsUpdate = true;
      
      // Rotate the entire cloud slowly
      particles.rotation.y = time * 0.05;
      particles.rotation.x = time * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
}
