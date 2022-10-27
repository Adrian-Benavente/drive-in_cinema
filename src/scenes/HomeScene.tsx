import { Ground, VideoPlane, Vehicles, Trees, Screen } from "@/components";
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
        position={[0, 10, -300]}
        color="#cc4ada"
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
      <Environment preset="night" />
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      <group position={[0, -5, 0]}>
        <Ground />
        <VideoPlane videourl="./delorean-synthwave.mp4" />
        {/* Screen */}
        <Screen />
        {/* Ground */}
        <mesh>
          <boxGeometry args={[40, 3, 40]} />
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
