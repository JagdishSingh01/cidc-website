import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function FloatingOrbs() {
  const orb1Ref = useRef<Mesh>(null);
  const orb2Ref = useRef<Mesh>(null);
  const orb3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      orb1Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 1;
      orb1Ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.4) * 1;
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 1.5;
      orb2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 1.5;
      orb2Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.8;
    }
    
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.7) * 1.2;
      orb3Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 1.8;
      orb3Ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.6) * 1.3;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#FF6B00" 
          transparent 
          opacity={0.6}
          roughness={0.1}
          metalness={0.9}
          emissive="#FF6B00"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <mesh ref={orb2Ref} position={[1, 1, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial 
          color="#1976D2" 
          transparent 
          opacity={0.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#1976D2"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <mesh ref={orb3Ref} position={[-1, -1, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="#5C6BC0" 
          transparent 
          opacity={0.7}
          roughness={0.1}
          metalness={0.9}
          emissive="#5C6BC0"
          emissiveIntensity={0.15}
        />
      </mesh>
    </>
  );
}