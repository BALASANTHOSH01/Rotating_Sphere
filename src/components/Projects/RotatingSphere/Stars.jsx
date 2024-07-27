import React, { useMemo } from 'react';
import { Points, PointsMaterial, BufferGeometry, Float32BufferAttribute, Vector3, AdditiveBlending } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Stars = () => {
  const starsGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 50; i++) {
      const particleStar = randomPointSphere(150);
      vertices.push(particleStar.x, particleStar.y, particleStar.z);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  const textureStar = useTexture('https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png');

  const starsMaterial = useMemo(() => new PointsMaterial({
    size: 5,
    color: '#ffffff',
    transparent: true,
    opacity: 0.8,
    map: textureStar,
    blending: AdditiveBlending,
  }), [textureStar]);

  starsMaterial.depthWrite = false;

  useFrame(() => {
    const positions = starsGeometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      positions[i] += (0 - x) / 50;
      positions[i + 1] += (0 - y) / 50;
      positions[i + 2] += (0 - z) / 50;

      if (x <= 5 && x >= -5 && z <= 5 && z >= -5) {
        positions[i] = Math.random() * 150 - 75;
        positions[i + 1] = Math.random() * 150 - 75;
        positions[i + 2] = Math.random() * 150 - 75;
      }
    }

    starsGeometry.attributes.position.needsUpdate = true;
  });

  return <primitive object={new Points(starsGeometry, starsMaterial)} />;
};

function randomPointSphere(radius) {
  const theta = 2 * Math.PI * Math.random();
  const phi = Math.acos(2 * Math.random() - 1);
  const dx = radius * Math.sin(phi) * Math.cos(theta);
  const dy = radius * Math.sin(phi) * Math.sin(theta);
  const dz = radius * Math.cos(phi);
  return new Vector3(dx, dy, dz);
}

export default Stars;
