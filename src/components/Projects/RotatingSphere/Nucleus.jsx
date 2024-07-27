import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, IcosahedronGeometry, MeshPhongMaterial, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import {createNoise3D} from 'simplex-noise';

const noise = new createNoise3D();
const blobScale = 3;

const Nucleus = () => {
  const ref = useRef();
  const texture = useLoader(TextureLoader, 'https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg');

  // Generate geometry and store original vertices
  const geometry = useMemo(() => {
    const geom = new IcosahedronGeometry(30, 10);
    geom.userData = { originalVertices: [] };
    geom.attributes.position.array.forEach((_, i) => {
      if (i % 3 === 0) {
        geom.userData.originalVertices.push(new Vector3(
          geom.attributes.position.array[i],
          geom.attributes.position.array[i + 1],
          geom.attributes.position.array[i + 2]
        ));
      }
    });
    return geom;
  }, []);

  const material = useMemo(() => new MeshPhongMaterial({ map: texture }), [texture]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 1000; // Use clock.getElapsedTime() instead of Date.now()

    // Update vertex positions
    geometry.userData.originalVertices.forEach((v, i) => {
      const pos = geometry.attributes.position.array;

      v.normalize();
      // Adjust the noise function if needed
      const distance = 30 + noise(
        v.x + time * 0.0005,
        v.y + time * 0.0003,
        v.z + time * 0.0008
      ) * blobScale;

      const offset = i * 3;
      pos[offset] = v.x * distance;
      pos[offset + 1] = v.y * distance;
      pos[offset + 2] = v.z * distance;
    });

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return <mesh ref={ref} geometry={geometry} material={material} />;
};

export default Nucleus;
