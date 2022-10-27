import { Ground, VideoPlane, Vehicles, Trees } from "@/components";
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stars,
} from "@react-three/drei";

export const HomeScene = () => {
  return (
    <>
      <OrbitControls />
      <directionalLight
        position={[0, 15, -9000]}
        color="#c2c0bd"
        castShadow
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="city" />
      {/* <ambientLight /> */}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      <group position={[0, -5, 0]}>
        <Ground />
        <VideoPlane videourl="./Woods.mp4" />
        {/* Screen */}
        <mesh castShadow receiveShadow position={[0, 6.5, -12.1]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color="black"
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Ground */}
        <mesh>
          <boxGeometry args={[20, 3, 30]} />
          <meshStandardMaterial
            color="#4D2E1A"
            envMapIntensity={0}
            roughness={0}
            metalness={0}
          />
        </mesh>
      </group>
      <Trees />
      <Vehicles />
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={20}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};
