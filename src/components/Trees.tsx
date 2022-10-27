import { Tree } from "@/models";

const GroupBack = () => (
  <>
    <Tree scale={0.2} position={[-9, -3.48, 15]} />
    <Tree scale={0.2} position={[-8, -3.48, 15.6]} />
    <Tree scale={0.2} position={[-7, -3.48, 14.5]} />
    <Tree scale={0.2} position={[-6, -3.48, 15.5]} />
    <Tree scale={0.2} position={[-5, -3.48, 15]} />
    <Tree scale={0.2} position={[-4, -3.48, 14.5]} />
    <Tree scale={0.2} position={[-3, -3.48, 16.3]} />
    <Tree scale={0.2} position={[-1.7, -3.48, 15.3]} />
    <Tree scale={0.2} position={[-0.6, -3.48, 16.6]} />
    <Tree scale={0.2} position={[1.6, -3.48, 15.1]} />
    <Tree scale={0.2} position={[3.5, -3.48, 16.1]} />
    <Tree scale={0.2} position={[5.5, -3.48, 15.9]} />
    <Tree scale={0.2} position={[7, -3.48, 15]} />
    <Tree scale={0.2} position={[7.5, -3.48, 16]} />
    <Tree scale={0.2} position={[8.7, -3.48, 15.6]} />
    <Tree scale={0.2} position={[9.3, -3.48, 14]} />
  </>
);

const GroupSides = () => (
  <>
    <Tree scale={0.2} position={[-12, -3.48, 13]} />
    <Tree scale={0.2} position={[-14, -3.48, 12]} />
    <Tree scale={0.2} position={[-12.5, -3.48, 11]} />
    <Tree scale={0.2} position={[-13.5, -3.48, 14]} />
    <Tree scale={0.2} position={[-10.5, -3.48, 13.5]} />
    <Tree scale={0.2} position={[-14, -3.48, 10]} />
    <Tree scale={0.2} position={[-15, -3.48, 8.5]} />
    <Tree scale={0.2} position={[-16, -3.48, 10]} />
    <Tree scale={0.2} position={[-16, -3.48, 7]} />
    <Tree scale={0.2} position={[16, -3.48, 7]} />
    <Tree scale={0.2} position={[16, -3.48, 10]} />
    <Tree scale={0.2} position={[15, -3.48, 8.5]} />
    <Tree scale={0.2} position={[14, -3.48, 10]} />
    <Tree scale={0.2} position={[10.5, -3.48, 13.5]} />
    <Tree scale={0.2} position={[13.5, -3.48, 14]} />
    <Tree scale={0.2} position={[12.5, -3.48, 11]} />
    <Tree scale={0.2} position={[14, -3.48, 12]} />
    <Tree scale={0.2} position={[12, -3.48, 13]} />
  </>
);

export const Trees = () => (
  <>
    <GroupSides />
    <GroupBack />
  </>
);
