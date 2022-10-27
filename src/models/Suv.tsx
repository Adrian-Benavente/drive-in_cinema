import React from "react";
import { useGLTF } from "@react-three/drei";

export function Suv(props: any) {
  const { nodes, materials } = useGLTF("/suv.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_wheel_frontLeft006.geometry}
          material={materials.carTire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_wheel_frontLeft006_1.geometry}
          material={materials["_defaultMat.021"]}
        />
      </group>
      <group scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_wheel_frontLeft008.geometry}
          material={materials.carTire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_wheel_frontLeft008_1.geometry}
          material={materials["_defaultMat.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheel_frontLeft007.geometry}
        material={materials.carTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheel_frontLeft007_1.geometry}
        material={materials["_defaultMat.021"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body001.geometry}
        material={materials["plastic.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body001_1.geometry}
        material={materials.paintGreen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body001_2.geometry}
        material={materials["_defaultMat.021"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body001_3.geometry}
        material={materials["window.021"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body001_4.geometry}
        material={materials.lightBack}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body001_5.geometry}
        material={materials.lightFront}
      />
      <group scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_wheel_frontLeft005.geometry}
          material={materials.carTire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_wheel_frontLeft005_1.geometry}
          material={materials["_defaultMat.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheel_frontLeft004.geometry}
        material={materials.carTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheel_frontLeft004_1.geometry}
        material={materials["_defaultMat.021"]}
      />
    </group>
  );
}

useGLTF.preload("/suv.gltf");
