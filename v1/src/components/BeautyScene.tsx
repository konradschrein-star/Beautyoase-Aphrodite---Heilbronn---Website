import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  PresentationControls, 
  ContactShadows, 
  Environment 
} from '@react-three/drei';

const FloatingBeautyObject = ({ position, color, speed = 1, distort = 0.4, scale = 1 }: any) => {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={speed * 2}
          distort={distort}
          radius={1}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const SerumBottle = ({ position, color }: any) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <group position={position}>
        {/* Bottle Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
          <meshPhysicalMaterial 
            color={color} 
            transmission={0.9} 
            thickness={0.5} 
            roughness={0} 
            ior={1.5} 
            clearcoat={1}
          />
        </mesh>
        {/* Cap */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.3, 32]} />
          <meshStandardMaterial color="#FFD1DC" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Dropper */}
        <mesh position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FAF9F7" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <PresentationControls
        global
        snap
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
      >
        <group scale={1.2}>
          <FloatingBeautyObject position={[-2, 1, -1]} color="#F8E7F0" speed={1.2} distort={0.5} scale={0.8} />
          <FloatingBeautyObject position={[2, -1, 1]} color="#D4E4D3" speed={0.8} distort={0.3} scale={0.6} />
          <FloatingBeautyObject position={[0, 2, -2]} color="#FFD1DC" speed={1.5} distort={0.6} scale={0.4} />
          <SerumBottle position={[0, -0.5, 0]} color="#FFFFFF" />
        </group>
      </PresentationControls>

      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      <Environment preset="studio" />
    </>
  );
};

export const BeautyScene = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};
