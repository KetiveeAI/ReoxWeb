"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── WORLD POSITIONS ──────────────────────────────────────────────────────────
// Bird starts top-right and never overlaps body text.
const HERO_POS = { x: 4.5,  y: 3.2,  z: -1.5 };
const HERO_ROT = { x: 0,    y: -0.3, z: 0.06  };
// Nest is centred near the bottom – lives in its own scroll section.
const NEST_POS = { x: 0,    y: -2.9, z: 0     };
const NEST_ROT = { x: 0.1,  y: -0.1, z: 0     };

function smoothstep(t: number) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

export default function WebGLLogo() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ── RENDERER ───────────────────────────────────────────────────────────────
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // ── LIGHTS ─────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);
    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.5, 22);
    purpleLight.position.set(-4, -3, 4);
    scene.add(purpleLight);
    const cyanLight = new THREE.PointLight(0x06b6d4, 2.5, 22);
    cyanLight.position.set(4, -4, -4);
    scene.add(cyanLight);
    // Warm amber light that strengthens as bird approaches nest
    const warmLight = new THREE.PointLight(0xfbbf24, 0, 15);
    warmLight.position.set(0, -5, 3);
    scene.add(warmLight);

    // ── NEST (procedural, no extra GLB) ────────────────────────────────────────
    const nestGroup = new THREE.Group();
    nestGroup.position.set(NEST_POS.x, NEST_POS.y - 3, NEST_POS.z); // off-screen initially
    scene.add(nestGroup);

    // Bowl ring
    const nestRingGeo = new THREE.TorusGeometry(0.55, 0.18, 8, 32);
    const nestMat = new THREE.MeshPhysicalMaterial({
      color: 0x6b4226, roughness: 0.9, metalness: 0.0,
      transparent: true, opacity: 0,
    });
    const nestRing = new THREE.Mesh(nestRingGeo, nestMat);
    nestRing.rotation.x = Math.PI / 2;
    nestGroup.add(nestRing);

    // Twig lines around the nest
    const twigMats: THREE.LineBasicMaterial[] = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const r0 = 0.32 + Math.random() * 0.28;
      const r1 = 0.52 + Math.random() * 0.28;
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(Math.cos(angle) * r0, (Math.random() - 0.5) * 0.12, Math.sin(angle) * r0),
        new THREE.Vector3(Math.cos(angle + 0.45) * r1, (Math.random() - 0.5) * 0.14, Math.sin(angle + 0.45) * r1),
      ]);
      const mat = new THREE.LineBasicMaterial({ color: 0x8b5e3c, transparent: true, opacity: 0 });
      twigMats.push(mat);
      nestGroup.add(new THREE.Line(geo, mat));
    }

    // Egg — matches logo orb aesthetic (purple-violet, iridescent)
    const eggGeo = new THREE.SphereGeometry(0.28, 32, 32);
    eggGeo.scale(1, 1.22, 1);
    const eggMat = new THREE.MeshPhysicalMaterial({
      color: 0x7c3aed, emissive: 0x4c1d95, emissiveIntensity: 0.6,
      roughness: 0.12, metalness: 0.25,
      transparent: true, opacity: 0,
    });
    const eggMesh = new THREE.Mesh(eggGeo, eggMat);
    eggMesh.position.set(0.05, 0.2, 0.05);
    nestGroup.add(eggMesh);

    // Glow halo around egg
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, transparent: true, opacity: 0, side: THREE.BackSide,
    });
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), haloMat);
    halo.position.copy(eggMesh.position);
    nestGroup.add(halo);

    // ── BIRD GROUP ─────────────────────────────────────────────────────────────
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Virtual scroll target — GSAP writes here, render loop lerps logoGroup to it
    const vT = {
      x: HERO_POS.x, y: HERO_POS.y, z: HERO_POS.z,
      rotX: HERO_ROT.x, rotY: HERO_ROT.y, rotZ: HERO_ROT.z,
    };

    let mixer: THREE.AnimationMixer | null = null;
    let isIntro = true;
    let atNest  = false;

    // Mouse parallax (gentle, only while flying)
    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // ── SCROLL HANDLER ─────────────────────────────────────────────────────────
    const onScrollUpdate = (progress: number, velocity: number) => {
      if (isIntro) return;
      const pitch = gsap.utils.clamp(-0.65, 0.65, velocity * -0.00035);

      if (progress < 0.82) {
        // FLYING: bird arcs from top-right toward bottom-center
        atNest = false;
        if (mixer) gsap.to(mixer, { timeScale: 1.3 + progress * 0.7, duration: 0.35 });

        const t = progress / 0.82;
        const s = smoothstep(t);
        vT.x    = HERO_POS.x + (NEST_POS.x - HERO_POS.x) * s;
        // Arc: rises a little then descends to nest
        vT.y    = HERO_POS.y + (NEST_POS.y - HERO_POS.y) * s + Math.sin(t * Math.PI) * 1.4;
        vT.z    = HERO_POS.z + (NEST_POS.z - HERO_POS.z) * t;
        vT.rotY = HERO_ROT.y + (NEST_ROT.y - HERO_ROT.y) * t;
        vT.rotX = pitch;
        vT.rotZ = HERO_ROT.z * (1 - t);

        // Hide nest elements while flying
        const op0 = { opacity: 0, duration: 0.25 };
        gsap.to(nestMat, op0);
        twigMats.forEach(m => gsap.to(m, op0));
        gsap.to(eggMat,  op0);
        gsap.to(haloMat, op0);
        gsap.to(warmLight, { intensity: t * 1.5, duration: 0.5 });

      } else {
        // LANDING: bird descends into nest
        const t = (progress - 0.82) / 0.18;
        const s = smoothstep(t);

        if (!atNest && t > 0.45) {
          atNest = true;
          if (mixer) gsap.to(mixer, { timeScale: 0.14, duration: 1.6 }); // wings slow to rest
        }

        vT.x    = NEST_POS.x;
        vT.y    = NEST_POS.y + 0.65 * (1 - s); // descend into nest
        vT.z    = NEST_POS.z;
        vT.rotY = NEST_ROT.y;
        vT.rotX = NEST_ROT.x * s;
        vT.rotZ = 0;

        // Reveal nest
        gsap.to(nestMat,   { opacity: s,          duration: 0.9 });
        twigMats.forEach(m => gsap.to(m, { opacity: s * 0.85, duration: 0.9 }));
        gsap.to(eggMat,    { opacity: s,           duration: 1.3 });
        gsap.to(haloMat,   { opacity: s * 0.28,    duration: 1.3 });
        gsap.to(warmLight, { intensity: 2.2,        duration: 0.8 });

        // Slide nest group into view
        gsap.to(nestGroup.position, { y: NEST_POS.y, duration: 1.3, ease: "power2.out" });
      }
    };

    // ── LOAD BIRD ──────────────────────────────────────────────────────────────
    new GLTFLoader().load(
      "/bird.glb",
      (gltf) => {
        const model = gltf.scene;
        const box   = new THREE.Box3().setFromObject(model);
        model.position.sub(box.getCenter(new THREE.Vector3()));
        const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
        logoGroup.scale.setScalar(4.5 / maxDim);
        logoGroup.add(model);

        if (gltf.animations?.length) {
          mixer = new THREE.AnimationMixer(model);
          mixer.clipAction(gltf.animations[0]).play();
        }

        // Intro fly-in from top-left
        logoGroup.position.set(-13, 9, -4);
        logoGroup.rotation.set(0, -Math.PI, -0.4);

        gsap.timeline({
          onComplete: () => {
            isIntro = false;
            // Attach scroll trigger only after intro completes
            gsap.to({}, {
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 2,
                onUpdate: (self) => onScrollUpdate(self.progress, self.getVelocity()),
              },
            });
          },
        })
        .to(logoGroup.position, {
          x: HERO_POS.x, y: HERO_POS.y, z: HERO_POS.z,
          duration: 2.6, ease: "power3.out",
        }, 0)
        .to(logoGroup.rotation, {
          x: HERO_ROT.x, y: HERO_ROT.y, z: HERO_ROT.z,
          duration: 2.6, ease: "power3.out",
        }, 0);
      },
      undefined,
      (err) => console.error("GLB error:", err)
    );

    // ── RENDER LOOP ────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let rafId: number;
    const tPos  = new THREE.Vector3();
    const tEul  = new THREE.Euler();
    const tQuat = new THREE.Quaternion();

    const render = () => {
      const delta = clock.getDelta();
      const time  = clock.getElapsedTime();
      mixer?.update(delta);

      if (!isIntro) {
        const mx = atNest ? 0 : mouse.x * 0.16;
        const my = atNest ? 0 : mouse.y * 0.09;
        const bob = Math.sin(time * 1.9) * (atNest ? 0.03 : 0.10);

        tPos.set(vT.x + mx, vT.y + my + bob, vT.z);
        tEul.set(vT.rotX, vT.rotY, vT.rotZ);
        tQuat.setFromEuler(tEul);

        logoGroup.position.lerp(tPos, atNest ? 0.022 : 0.04);
        logoGroup.quaternion.slerp(tQuat, 0.044);

        // Egg heartbeat pulse when at nest
        if (atNest) {
          const pulse = 1 + Math.sin(time * 2.4) * 0.02;
          eggMesh.scale.setScalar(pulse);
          halo.scale.setScalar(1 + Math.sin(time * 2.4) * 0.045);
        }
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(render);
    };
    render();

    // ── RESIZE ─────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    // ── CLEANUP ────────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      mixer?.stopAllAction();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      // pointer-events-none so the 3D layer never blocks clicks on text/buttons
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}