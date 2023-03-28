import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Earth() {
  const earthTexture = useLoader(TextureLoader, "/img/textures/earth.jpg");
  const earthRef = useRef();
  const moonTexture = useLoader(TextureLoader, "/img/textures/moon.jpg");
  const moonRef = useRef();
  useFrame(() => {
    earthRef.current.rotation.y += 0.006;
    moonRef.current.rotation.y += 0.006;
  });
  useThree(({ camera }) => {
    camera.position.set(0, -5, 15);
  });
  return (
    <mesh position-z={-15} position-x={-12} position-y={-12} ref={earthRef}>
      <sphereGeometry args={[6, 20, 20]} />
      <meshStandardMaterial map={earthTexture} />
      {/* Moon */}
      <mesh ref={moonRef} position-x={0} position-y={4} position-z={-10}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </mesh>
  );
}
