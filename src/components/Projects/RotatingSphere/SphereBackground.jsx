import React, { useRef, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { BackSide } from 'three';

const SphereBackground = () => {
  const ref = useRef();
  const texture = useTexture('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg');

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const rotationX = (y / window.innerHeight - 0.5) * 2 * Math.PI;
      const rotationY = (x / window.innerWidth - 0.5) * 2 * Math.PI;
      ref.current.rotation.x = rotationX;
      ref.current.rotation.y = rotationY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    ref.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[120, 40, 40]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
};

export default SphereBackground;
