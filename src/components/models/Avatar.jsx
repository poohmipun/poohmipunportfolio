import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
export default function Avatar(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF("models/pooh.glb");

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");

  typingAnimation[0].name = "Typing";

  const { actions } = useAnimations(typingAnimation, group);

  useEffect(() => {
    actions["Typing"].reset().play();
  }, []);

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <skinnedMesh
          name="Cube_033"
          frustumCulled={false}
          geometry={nodes.Cube_033.geometry}
          material={materials.Material_003}
          skeleton={nodes.Cube_033.skeleton}
          morphTargetDictionary={nodes.Cube_033.morphTargetDictionary}
          morphTargetInfluences={nodes.Cube_033.morphTargetInfluences}
        />
        <primitive object={nodes.RL_BoneRoot} />
      </group>
    </group>
  );
}

useGLTF.preload("models/pooh.glb");
