import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Ground = () => {
  const groundTexture = useTexture("/grass.jpg");
  groundTexture.wrapS = THREE.RepeatWrapping;
  groundTexture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <mesh position={[0, 1.52, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial map={groundTexture} />
      </mesh>
    </>
  );
};
