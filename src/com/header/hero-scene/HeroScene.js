import { Canvas } from "@react-three/fiber";
import {
  Text3D,
  useMatcapTexture,
  OrbitControls,
  Center,
} from "@react-three/drei";
import Name from "./Name";
import Earth from "../../scene/Earth";
import Hello from "./Hello";
export default function HeroScene() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Name />
        {/* <Hello /> */}
        {/* <Earth /> */}
      </Canvas>
    </div>
  );
}
