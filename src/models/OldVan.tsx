import React from "react";
import { useGLTF } from "@react-three/drei";

export const OldVan = (props: any) => {
  const { nodes, materials } = useGLTF("/old-van.gltf") as any;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Citroen_Old_Van.geometry}
        material={materials["Citroen Old Van 001 Material"]}
      >
        <group position={[0, -0.68, 0.58]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.rim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Tire}
          />
        </group>
        <group position={[0, -0.68, -1.39]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials.rim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.Tire}
          />
        </group>
      </mesh>
    </group>
  );
};

useGLTF.preload("/old-van.gltf");
