import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import Hello from "./Hello";
import Name from "./Name";
import Office from "./Office";
export default function HeroScene() {
  return (
    <div className="w-full h-80 lg:h-screen pt-20" id="top">
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ height: " 100%", width: "100%", margin: "0 auto" }}
        updateDefaultCamera={true}

        // pixelRatio={window.devicePixelRatio}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 3, 3]} />
        <Suspense fallback={<Hello />}>
          <Name />
          <Office />
        </Suspense>
      </Canvas>
    </div>
  );
}
