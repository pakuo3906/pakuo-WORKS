'use client'

import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ExtrudeGeometry, Shape } from 'three'
import * as THREE from 'three'
import { isWebGLSupported } from '@/lib/webgl-check'
import { ErrorBoundary } from './error-boundary'

// Responsive camera and grid configuration
const getResponsiveConfig = () => {
  if (typeof window === 'undefined') {
    return { 
      position: [-9.31, 12, 24.72] as [number, number, number], 
      fov: 35,
      gridSize: 10
    };
  }
  
  const width = window.innerWidth;
  
  if (width < 640) { // sm - mobile
    return { 
      position: [-6, 10, 20] as [number, number, number], 
      fov: 50,
      gridSize: 5
    };
  } else if (width < 768) { // md - tablet
    return { 
      position: [-7.5, 11, 23] as [number, number, number], 
      fov: 45,
      gridSize: 7
    };
  } else {
    return { 
      position: [-9.31, 12, 24.72] as [number, number, number], 
      fov: 35,
      gridSize: 10
    };
  }
};

interface BoxProps {
  position: [number, number, number];
  width?: number;
  length?: number;
  cornerRadius?: number;
  gridPosition: [number, number];
  hoveredBox: [number, number] | null;
  rippleScale?: number;
  rippleRadius?: number;
  gridSize: number;
}

const Box = ({ 
    position, 
    width = 4, 
    length = 4, 
    cornerRadius = 2,
    gridPosition,
    hoveredBox,
    rippleScale = 0.3,
    rippleRadius = 3,
    gridSize
}: BoxProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [currentScale, setCurrentScale] = useState(1);
    
    const geometry = useMemo(() => {
        const shape = new Shape();
        const angleStep = Math.PI * 0.5;
        const radius = cornerRadius;
        
        const halfWidth = width / 2;
        const halfLength = length / 2;

        shape.absarc(halfWidth - radius, halfLength - radius, radius, angleStep * 0, angleStep * 1);
        shape.absarc(-halfWidth + radius, halfLength - radius, radius, angleStep * 1, angleStep * 2);
        shape.absarc(-halfWidth + radius, -halfLength + radius, radius, angleStep * 2, angleStep * 3);
        shape.absarc(halfWidth - radius, -halfLength + radius, radius, angleStep * 3, angleStep * 4);

        const extrudeSettings = {
            depth: 0.3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: gridSize >= 10 ? 12 : 8,
            curveSegments: gridSize >= 10 ? 12 : 8
        };

        const geometry = new ExtrudeGeometry(shape, extrudeSettings);
        geometry.center();
        
        return geometry;
    }, [width, length, cornerRadius, gridSize]);
    
    useEffect(() => {
        return () => {
            geometry.dispose();
        };
    }, [geometry]);

    useFrame(() => {
        if (meshRef.current) {
            let targetScale = 1;
            
            const isThisBoxHovered = hoveredBox && 
                gridPosition[0] === hoveredBox[0] && 
                gridPosition[1] === hoveredBox[1];
            
            if (isThisBoxHovered) {
                targetScale = 5;
            } else if (hoveredBox) {
                const dx = gridPosition[0] - hoveredBox[0];
                const dz = gridPosition[1] - hoveredBox[1];
                const distance = Math.sqrt(dx * dx + dz * dz);
                
                if (distance <= rippleRadius && distance > 0) {
                    const falloff = Math.max(0, 1 - (distance / rippleRadius));
                    const rippleEffect = falloff * rippleScale;
                    targetScale = 1 + (rippleEffect * 3);
                }
            }
            
            const lerpFactor = 0.1;
            const newScale = currentScale + (targetScale - currentScale) * lerpFactor;
            setCurrentScale(newScale);
            
            meshRef.current.scale.z = newScale;
        }
    });

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.userData.gridPosition = gridPosition;
        }
    }, [gridPosition]);

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            position={position}
            rotation={[Math.PI / 2, 0, 0]}
        >
            <meshPhysicalMaterial 
                color="#232323" 
                roughness={0.5} 
                metalness={1}
                clearcoat={1}
                clearcoatRoughness={0}
                clearcoatNormalScale={1}
                clearcoatNormalMap={null}
            />
        </mesh>
    );
};

function HoverDetector({ 
  gridSize,
  onHoverChange 
}: {
  gridSize: number;
  spacingX: number;
  spacingZ: number;
  onHoverChange: (hoveredBox: [number, number] | null) => void;
}) {
  const { camera, raycaster, pointer, scene } = useThree();
  const frameCount = useRef(0);
  
  useFrame(() => {
    frameCount.current++;
    // Reduce raycasting frequency on smaller grids
    const skipFrames = gridSize <= 5 ? 2 : gridSize <= 7 ? 1 : 0;
    
    if (frameCount.current % (skipFrames + 1) !== 0) {
      return;
    }
    
    raycaster.setFromCamera(pointer, camera);
    
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    if (intersects.length > 0) {
      for (const intersect of intersects) {
        const mesh = intersect.object;
        if (mesh.userData && mesh.userData.gridPosition) {
          const gridPos = mesh.userData.gridPosition as [number, number];
          onHoverChange(gridPos);
          return;
        }
      }
    }
    
    onHoverChange(null);
  });
  
  return null;
}

function GridOfBoxes() {
  const [config, setConfig] = useState(getResponsiveConfig());
  const gridSize = config.gridSize;
  const boxWidth = 4;
  const boxLength = 4;
  const gap = 0.05;
  const spacingX = boxWidth + gap;
  const spacingZ = boxLength + gap;
  
  const [hoveredBox, setHoveredBox] = useState<[number, number] | null>(null);
  const rippleScale = 2.5;
  const rippleRadius = 2;
   
  // Memoize boxes array to prevent unnecessary re-renders
  const boxes = useMemo(() => {
    const boxArray = [];
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const posX = (x - (gridSize - 1) / 2) * spacingX;
        const posZ = (z - (gridSize - 1) / 2) * spacingZ;
        
        boxArray.push(
          <Box 
            key={`${x}-${z}`} 
            position={[posX, -0.85, posZ]}
            width={boxWidth}
            length={boxLength}
            cornerRadius={0.8}
            gridPosition={[x, z]}
            hoveredBox={hoveredBox}
            rippleScale={rippleScale}
            rippleRadius={rippleRadius}
            gridSize={gridSize}
          />
        );
      }
    }
    return boxArray;
  }, [hoveredBox, gridSize, boxWidth, boxLength, spacingX, spacingZ, rippleScale, rippleRadius]);

  // Update config on window resize
  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HoverDetector
        gridSize={gridSize}
        spacingX={spacingX}
        spacingZ={spacingZ}
        onHoverChange={setHoveredBox}
      />
      {boxes}
    </>
  );
}

// Fallback component for unsupported devices
const WebGLFallback = () => (
  <div className="h-full w-full bg-black flex items-center justify-center">
    <div className="text-center text-white p-8">
      <h2 className="text-2xl font-light mb-4 tracking-widest">
        パクお。WORKS
      </h2>
      <p className="text-white/70 font-mono text-sm mb-4">
        Your device doesn&apos;t support 3D graphics.
      </p>
      <p className="text-white/50 text-xs">
        Try using a modern browser like Chrome, Firefox, or Safari.
      </p>
    </div>
  </div>
);

export function ChromeGrid() {
  const [config, setConfig] = useState(getResponsiveConfig());
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL support on client side
    setWebglSupported(isWebGLSupported());

    const handleResize = () => {
      setConfig(getResponsiveConfig());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show loading state while checking WebGL support
  if (webglSupported === null) {
    return (
      <div className="h-full w-full bg-black flex items-center justify-center">
        <div className="text-white font-mono text-sm">Loading...</div>
      </div>
    );
  }

  // Show fallback if WebGL is not supported
  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <ErrorBoundary>
      <div className="h-full w-full bg-black relative z-0">
        <Canvas camera={{ 
          position: config.position, 
          rotation: [-0.65, -0.2, -0.13],
          fov: config.fov 
        }}>
          <ambientLight intensity={1} />
          
          <directionalLight 
            position={[10, 15, 10]} 
            intensity={10}
            castShadow
          />
          
          <directionalLight 
            position={[-10, 10, -5]} 
            intensity={10}
            color="#ffffff"
          />
          
          <directionalLight 
            position={[5, -10, 15]} 
            intensity={5}
            color="#f0f8ff"
          />
          
          <pointLight 
            position={[0, 20, 3]} 
            intensity={2}
            distance={50}
          />
          
          <pointLight 
             position={[15, 5, 15]} 
             intensity={1.5}
             distance={40}
             color="#ffffff"
           />
                    
           <GridOfBoxes />        
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}