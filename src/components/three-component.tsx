import { useEffect, useRef } from "react";
import * as Three from "three";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();

function threeComponent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    let frameId: number;

    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new Three.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setSize(window.innerWidth - 500, window.innerHeight - 250);

    const water = new Three.PlaneGeometry(50, 29, 200, 100);
    const watermaterial = new Three.PointsMaterial({ size: 0.005 });
    const watermesh = new Three.Points(water, watermaterial);
    watermesh.rotation.x = -Math.PI / 2;
    watermesh.position.y = -1.5;
    watermesh.position.z = -1.5;

    const torus = new Three.TorusGeometry(0.05, 0.5, 16, 50);
    const material = new Three.PointsMaterial({ size: 0.005 });
    const torusmesh = new Three.Points(torus, material);
    torusmesh.position.z = -10.5;
    torusmesh.position.x = 12.5;
    torusmesh.position.y = 8.5;

    scene.add(torusmesh);
    scene.add(watermesh);

    const light = new Three.PointLight(0xffffff, 3);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const waterWaves = water.attributes.position;
    const baseZwater = Float32Array.from(waterWaves.array);

    function animateWater(time: number) {
      frameId = requestAnimationFrame(animateWater);

      const t = time * 0.001;
      
      for (let i = 0; i < waterWaves.count; i++) {
        const x = waterWaves.getX(i);
        const y = waterWaves.getY(i);
        const z = baseZwater[i * 3 + 2];

        const noise = noise3D(x * 1.5 + t * 0.3, y * 1.5 + t * 0.2, t);

        waterWaves.setZ(i, z + noise * 0.2);
      }

      waterWaves.needsUpdate = true;
      renderer.render(scene, camera);
    }

    function animateTorus() {
      frameId = requestAnimationFrame(animateTorus);
      torusmesh.rotation.x += 0.01;
      torusmesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animateWater(1);
    animateTorus();
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      torus.dispose();
      water.dispose();
      watermaterial.dispose();
      material.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
export default threeComponent;
