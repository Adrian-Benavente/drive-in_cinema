import { CyberTruck, HatchBack, OldVan, SportsSedan, Suv, Van } from "@/models";

const Row1 = () => (
  <>
    <Suv rotation-y={Math.PI / 0.2} position={[1, -3.48, 0]} />
    <CyberTruck
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[7, -3.48, 0]}
    />
    <SportsSedan
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[4, -3.48, 0]}
    />
    <OldVan rotation-y={Math.PI / 0.2} scale={0.8} position={[-8, -2.75, 0]} />
    <HatchBack
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[-2, -3.48, 0]}
    />
    <Van rotation-y={Math.PI / 0.2} scale={0.8} position={[-5, -3.48, 0]} />
  </>
);

const Row2 = () => (
  <>
    <OldVan
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[-0.5, -2.75, 5]}
    />
    <Suv rotation-y={Math.PI / 0.2} position={[2.6, -3.48, 5]} />
    <HatchBack
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[5.4, -3.48, 5]}
    />
    <Van rotation-y={Math.PI / 0.2} scale={0.8} position={[8, -3.48, 5]} />
    <CyberTruck
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[-3.5, -3.48, 5]}
    />
    <SportsSedan
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[-6, -3.48, 5]}
    />
    <HatchBack
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[-8, -3.48, 5]}
    />
  </>
);

const Row3 = () => (
  <>
    <OldVan rotation-y={Math.PI / 0.2} scale={0.8} position={[-2, -2.75, 11]} />
    <Suv rotation-y={Math.PI / 0.2} position={[-5, -3.48, 11]} />
    <HatchBack
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[7, -3.48, 11]}
    />
    <Van rotation-y={Math.PI / 0.2} scale={0.8} position={[-8, -3.48, 11]} />
    <CyberTruck
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[4, -3.48, 11]}
    />
    <SportsSedan
      rotation-y={Math.PI / 0.2}
      scale={0.8}
      position={[1, -3.48, 11]}
    />
  </>
);

export const Vehicles = () => (
  <>
    <Row1 />
    <Row2 />
    <Row3 />
  </>
);
