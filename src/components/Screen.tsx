export const Screen = () => (
  <mesh castShadow receiveShadow position={[0, 6.5, -18]}>
    <boxGeometry args={[17, 10, 1]} />
    <meshStandardMaterial
      color="black"
      envMapIntensity={0.5}
      roughness={0.2}
      metalness={0.8}
    />
  </mesh>
);
