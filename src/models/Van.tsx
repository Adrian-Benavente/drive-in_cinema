import React from "react";
import { useGLTF } from "@react-three/drei";

export function Van(props: any) {
  const { nodes, materials } = useGLTF("/van.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]} scale={1.2}>
        <group position={[0, 0.2, -0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body_1.geometry}
            material={materials.paintBlue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body_2.geometry}
            material={materials.lightFront}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body_3.geometry}
            material={materials._defaultMat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body_4.geometry}
            material={materials.lightBack}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body_5.geometry}
            material={materials.window}
          />
        </group>
        <group position={[-0.35, 0.3, 0.76]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft.geometry}
            material={materials.carTire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
            material={materials._defaultMat}
          />
        </group>
        <group position={[0.35, 0.3, 0.76]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft.geometry}
            material={materials.carTire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
            material={materials._defaultMat}
          />
        </group>
        <group position={[-0.35, 0.3, -0.76]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft.geometry}
            material={materials.carTire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
            material={materials._defaultMat}
          />
        </group>
        <group position={[0.35, 0.3, -0.76]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft.geometry}
            material={materials.carTire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft_1.geometry}
            material={materials._defaultMat}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/van.gltf");
