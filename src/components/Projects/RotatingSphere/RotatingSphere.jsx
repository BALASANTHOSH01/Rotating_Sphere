import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Stars from "./Stars";
import SphereBackground from "./SphereBackground";
import Nucleus from "./Nucleus";

const RotatingSphere = () => {
  return (
    <div id="canvas_container" className="md:w-[80%] md:h-[80%]">
      <Canvas camera={{ position: [0, 0, 230], fov: 55 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 50, -20]} intensity={2} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          maxDistance={350}
          minDistance={150}
          enablePan={false}
        />
        <Nucleus />
        <SphereBackground />
        <Stars />
      </Canvas>
    </div>
  );
};

export default RotatingSphere;
