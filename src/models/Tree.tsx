import React from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props: any) {
  const { nodes, materials } = useGLTF("/tree.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce"].geometry}
        material={materials.color_main}
      />
    </group>
  );
}

useGLTF.preload("/tree.gltf");
