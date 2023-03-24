import { Canvas } from "@react-three/fiber";

import Name from "./Name";

export default function HeroScene() {
  return (
    <div className="w-full h-screen" id="top">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Name />
      </Canvas>
    </div>
  );
}
