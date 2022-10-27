import { Canvas, useThree } from "@react-three/fiber";
import { HomeScene } from "@/scenes";

export const App = () => {
  return (
    <>
      <main className="app">
        <a
          href="https://github.com/Adrian-Benavente/drive-in_cinema"
          className="github-link"
          title="Github Repo"
          target="_blank"
        ></a>
        <section className="hero">
          <h1>Floating Drive-in cinema</h1>
          <h2>Web 3D Workshop - Nerdearla</h2>
          <h3>Adrián Benavente</h3>
        </section>
      </main>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [-85, 45, 50], fov: 20 }}
      >
        <HomeScene />
      </Canvas>
    </>
  );
};
