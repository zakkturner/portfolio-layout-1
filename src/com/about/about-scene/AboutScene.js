import { Canvas } from "@react-three/fiber";

import Badges from "./Badges";

export default function AboutScene() {
  return (
    <div className="lg:w-1/2 w-full  p-2 h-100">
      <Canvas className="w-full">
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Badges />
      </Canvas>
    </div>
  );
}
