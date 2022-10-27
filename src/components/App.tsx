import { Canvas, useThree } from "@react-three/fiber";
import { HomeScene } from "@/scenes";

export const App = () => {
  return (
    <>
      <main className="app">
        <section className="hero">
          <h1>Drive-in cinema</h1>
          <h2>Web 3D Workshop - Nerdearla</h2>
          <h3>Adrián Benavente</h3>
        </section>
      </main>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [28, 15, 60], fov: 23 }}
      >
        <HomeScene />
      </Canvas>
    </>
  );
};
