import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./rubik_key/scene.gltf");

  return (
    <mesh>
    <hemisphereLight intensity={0.5} groundColor='orange' />
    <spotLight
      position={[-10, 10, 100]}
      angle={0.12}
      penumbra={1}
      intensity={1.5}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    <primitive object={earth.scene} scale={1} position-y={0} rotation-y={0} />
    <spotLight
      position={[50, -50, -100]}
      angle={0.5}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      color='orange'
    />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
