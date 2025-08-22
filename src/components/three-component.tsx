import { useEffect, useRef } from "react";
import * as Three from "three";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();

interface Impact {
  x: number;
  y: number;
  time: number;
  strength: number;
  radius: number;
}
let impacts: Impact[] = [];

function createImpact(x: number, y: number, strength = 1, radius =1) {
  console.log('Impacto creado en:', x, y, 'Fuerza:', strength, 'Radio:', radius);
  impacts.push({
    x,
    y,
    time: performance.now(),
    strength,
    radius,
  });
  
  // Limpiar impactos antiguos para evitar memory leak
  impacts = impacts.filter(impact => 
    (performance.now() - impact.time) < 5000 // 5 segundos
  );
}

function ThreeComponent() {
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
    camera.position.set(0, 3, 5);

    const renderer = new Three.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true 
    });
    renderer.setSize(window.innerWidth - 300, window.innerHeight - 150);

    // Agua
    const water = new Three.PlaneGeometry(50, 29, 200, 100);
    const watermaterial = new Three.PointsMaterial({ 
      size: 0.005,
      color: 0x0077be
    });
    const watermesh = new Three.Points(water, watermaterial);
    watermesh.rotation.x = -Math.PI / 2;
    watermesh.position.y = -1.5;
    watermesh.position.z = -1.5;

    const reflectionCount = 800;
    const reflectionGeometry = new Three.BufferGeometry();
    const reflectionPositions = new Float32Array(reflectionCount * 3);
    const reflectionColors = new Float32Array(reflectionCount * 3);

    
    for (let i = 0; i < reflectionCount; i++) {
      const i3 = i * 3;
      reflectionPositions[i3] = (Math.random() - 0.5) * 50; // X
      reflectionPositions[i3 + 1] = -1.4; // ligeramente arriba del agua
      reflectionPositions[i3 + 2] = (Math.random() - 0.5) * 29 - 1.5; // Z      
      
      reflectionColors[i3] = 1.0;     // R
      reflectionColors[i3 + 1] = 0.8; // G  
      reflectionColors[i3 + 2] = 0.3; // B
    }

    reflectionGeometry.setAttribute('position', new Three.BufferAttribute(reflectionPositions, 3));
    reflectionGeometry.setAttribute('color', new Three.BufferAttribute(reflectionColors, 3));

    const reflectionMaterial = new Three.PointsMaterial({
      size: 0.012,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: Three.AdditiveBlending
    });

    const reflectionMesh = new Three.Points(reflectionGeometry, reflectionMaterial);
    scene.add(reflectionMesh);

    //sol
    const torus = new Three.TorusGeometry(0.05, 0.5, 16, 50);
    const material = new Three.PointsMaterial({ 
      size: 0.005,
      color: 0xffe769 
    });
    const torusmesh = new Three.Points(torus, material);
    torusmesh.position.z = -10.5;
    torusmesh.position.x = 12.5;
    torusmesh.position.y = 8.5;    

    scene.add(torusmesh);
    scene.add(watermesh);
    
    const light = new Three.PointLight(0xffffff, 3);
    light.position.set(10, 10, 5);
    scene.add(light);

    const ambientLight = new Three.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const waterWaves = water.attributes.position;
    const baseZwater = Float32Array.from(waterWaves.array);

    function animateWater(time: number) {
      frameId = requestAnimationFrame(animateWater);
      const t = time * 0.001;

      // Animar agua
      for (let i = 0; i < waterWaves.count; i++) {
        const x = waterWaves.getX(i);
        const y = waterWaves.getY(i);
        const zBase = baseZwater[i * 3 + 2];
        
        let zOffset = noise3D(x * 0.8, y * 0.8, t) * 0.2;

        for (const impact of impacts) {
          const dx = x - impact.x;
          const dy = y - impact.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < impact.radius * 5) {
            const elapsed = (performance.now() - impact.time) / 1000;
            const decay = Math.exp(-dist / impact.radius);
            const ripple = Math.sin(dist * 2 - elapsed * 8) * decay;
            const envelope = Math.exp(-elapsed * 2);
            
            zOffset += impact.strength * ripple * envelope;
          }
        }

        waterWaves.setZ(i, zBase + zOffset);
      }
      waterWaves.needsUpdate = true;
      
      const reflectionPositionsArray = reflectionGeometry.attributes.position.array;
      const reflectionColorsArray = reflectionGeometry.attributes.color.array;
      const sunPos = torusmesh.position;
      
      for (let i = 0; i < reflectionCount; i++) {
        const i3 = i * 3;
        const x = reflectionPositionsArray[i3];
        const z = reflectionPositionsArray[i3 + 2];
        
        // Calcular distancia al sol
        const dx = x - sunPos.x;
        const dz = z - sunPos.z;
        const distToSun = Math.sqrt(dx * dx + dz * dz);
        
        // Intensidad del sol
        const rayIntensity = Math.max(0, 1 - distToSun / 20);
        
        // Efecto de ondas que hace que los reflejos parpadeen
        const waveEffect1 = Math.sin(t * 3 + x * 0.1) * Math.sin(t * 2.5 + z * 0.1);
        const waveEffect2 = Math.sin(t * 4 + (x + z) * 0.05);
        const combinedWave = (waveEffect1 + waveEffect2) * 0.5;
        const finalIntensity = rayIntensity * (0.3 + combinedWave * 0.7);
        
        // Solo mostrar partículas donde hay intensidad suficiente
        if (finalIntensity > 0.1) {
          const intensity = Math.max(0, finalIntensity);
          reflectionColorsArray[i3] = intensity;           // R
          reflectionColorsArray[i3 + 1] = intensity * 0.8; // G
          reflectionColorsArray[i3 + 2] = intensity * 0.4; // B          
          
          reflectionPositionsArray[i3 + 1] = -1.35 + Math.sin(t * 4 + i * 0.1) * 0.03;
        } else {
          // Ocultar partículas donde no hay reflejo
          reflectionColorsArray[i3] = 0;
          reflectionColorsArray[i3 + 1] = 0;
          reflectionColorsArray[i3 + 2] = 0;
        }
      }
      
      reflectionGeometry.attributes.position.needsUpdate = true;
      reflectionGeometry.attributes.color.needsUpdate = true;
            
      torusmesh.rotation.x += 0.01;
      torusmesh.rotation.y += 0.01;
      torusmesh.scale.setScalar(1 + Math.sin(t * 2) * 0.05);

      
      renderer.render(scene, camera);
    }

    function onClick(event: MouseEvent) {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new Three.Raycaster();
      const mouse = new Three.Vector2(mouseX, mouseY);
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(watermesh);
      
      if (intersects.length > 0) {
        const point = intersects[0].point;
        
        const localX = point.x; 
        const localY = -(point.z - watermesh.position.z);
        
        console.log('Click en mundo:', point.x, point.y, point.z);
        console.log('Coordenadas locales:', localX, localY);
        
        if (Math.abs(localX) <= 25 && Math.abs(localY) <= 14.5) {
          createImpact(localX, localY, 0.5, 2.0);
        }
      }
    }
    
    canvasRef.current.addEventListener("click", onClick);    

    animateWater(0);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      water.dispose();
      torus.dispose();
      watermaterial.dispose();
      material.dispose();
      reflectionGeometry.dispose();
      reflectionMaterial.dispose();
      scene.clear();
      
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("click", onClick);        
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="mb-4 text-center">
        <h2 className="text-white text-xl font-semibold mb-2">Ocean Sim</h2>
        <p className="text-white">Pro tip: click</p>
      </div>
      <canvas 
        ref={canvasRef}
        className=""
      />
    </div>
  );
}

export default ThreeComponent;