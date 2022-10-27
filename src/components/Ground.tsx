import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Ground = () => {
  const groundTexture = useTexture({ map: "/grass.jpg" });

  return (
    <>
      <mesh position={[0, 1.52, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial {...groundTexture} transparent />
      </mesh>
    </>
  );
};
