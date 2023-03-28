import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import Loading from "./Loading";
import Experience from "./Experience";
import Office from "./Office";
export default function HeroScene() {
  return (
    <div
      className="w-full h-72 md:h-100 lg:h-screen pt-20 mb-20 lg:mb-0"
      id="top"
    >
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ height: " 100%", width: "100%", margin: "0 auto" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 3, 3]} />
        <Suspense fallback={<Loading />}>
          <Experience />
          <Office />
        </Suspense>
      </Canvas>
    </div>
  );
}
