import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Earth from "./Earth";

export default function Hero() {
  return (
    <div className="w-1/2 h-100">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Earth />
      </Canvas>
    </div>
  );
}
