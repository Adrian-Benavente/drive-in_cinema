import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Ground = () => {
  const groundTexture = useTexture({ map: "/grass.jpg" });
  groundTexture.map.repeat = new THREE.Vector2(8, 8);
  groundTexture.map.wrapS = THREE.RepeatWrapping;
  groundTexture.map.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <mesh position={[0, 1.52, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial {...groundTexture} />
      </mesh>
    </>
  );
};
