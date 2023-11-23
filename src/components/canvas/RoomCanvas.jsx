import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Room from "../models/Room";
import Avatar from "../models/Avatar";
import CanvasLoader from "../Loader";

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={4} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2} />
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <group
          position={isMobile ? [0, -4.8, 0] : [-5, -2, -8]}
          scale={isMobile ? 2 : 4}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI * 2}
        >
          <group
            position={[0.4, -1.18, -0.15]}
            rotation-y={-Math.PI}
            scale={0.47}
          >
            <Avatar />
          </group>
          <Room />
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
