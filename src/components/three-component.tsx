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

function createImpact(x: number, y: number, strength = 1, radius = 1) {
  console.log('Impacto creado en:', x, y);
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
    camera.position.set(0, 3, 5); // Mejor posición para ver el agua

    const renderer = new Three.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true 
    });
    renderer.setSize(window.innerWidth - 300, window.innerHeight - 150);
    //renderer.setClearColor(0x87CEEB); // Color cielo

    
    const water = new Three.PlaneGeometry(50, 29, 200, 100);
    const watermaterial = new Three.PointsMaterial({ 
      size: 0.005,
      color: 0x0077be
    });
    const watermesh = new Three.Points(water, watermaterial);
    watermesh.rotation.x = -Math.PI / 2;
    watermesh.position.y = -1.5;
    watermesh.position.z = -1.5;

    
    const torus = new Three.TorusGeometry(0.05, 0.5, 16, 50);
    const material = new Three.PointsMaterial({ 
      size: 0.005,
      color: 0xFFD700 
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

      for (let i = 0; i < waterWaves.count; i++) {
        const x = waterWaves.getX(i);
        const y = waterWaves.getY(i);
        const zBase = baseZwater[i * 3 + 2];
        
        let zOffset = noise3D(x * 0.8, y * 0.8, t) * 0.2;

        
        for (const impact of impacts) {
          const dx = x - impact.x;
          const dy = y - impact.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < impact.radius * 5) { // Radio de influencia más amplio
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
            
      torusmesh.rotation.x += 0.01;
      torusmesh.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    }

    function onClick(event: MouseEvent) {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      
      // Coordenadas normalizadas del mouse (-1 a 1)
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Crear raycaster
      const raycaster = new Three.Raycaster();
      const mouse = new Three.Vector2(mouseX, mouseY);
      raycaster.setFromCamera(mouse, camera);

      // CORRECCIÓN: Usar intersectObject directamente con el watermesh
      const intersects = raycaster.intersectObject(watermesh);
      
      if (intersects.length > 0) {
        const point = intersects[0].point;
        
        // Las coordenadas ya están en el espacio del mundo
        // Solo necesitamos mapearlas al espacio local de la geometría
        // Dado que el agua está rotada en X y posicionada, convertimos:
        const localX = point.x; // X se mantiene igual
        const localY = -(point.z - watermesh.position.z); // Z del mundo se convierte en Y local
        
        console.log('Click en mundo:', point.x, point.y, point.z);
        console.log('Coordenadas locales:', localX, localY);
        
        // Verificar que el punto esté dentro de los límites del agua
        if (Math.abs(localX) <= 25 && Math.abs(localY) <= 14.5) {
          createImpact(localX, localY, 0.3, 2.0);
        }
      }
    }
    


    // Event listeners
    canvasRef.current.addEventListener("click", onClick);    

    
    animateWater(0);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      water.dispose();
      torus.dispose();
      watermaterial.dispose();
      material.dispose();
      scene.clear();
      
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("click", onClick);        
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="mb-4 text-center">
        <h2 className="text-white text-xl font-semibold mb-2">Simulación de Océano</h2>
        <p className="text-white">Haz click en el agua para crear ondas</p>
      </div>
      <canvas 
        ref={canvasRef}
        className="border border-gray-300 rounded-lg shadow-lg"
      />
    </div>
  );
}

export default ThreeComponent;