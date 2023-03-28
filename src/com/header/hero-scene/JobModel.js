import { useRef } from "react";
import { Text3D, useMatcapTexture } from "@react-three/drei";

import { useFrame, useThree } from "@react-three/fiber";

export default function JobModel() {
  const { viewport } = useThree();

  const descriptionRef = useRef(null);

  useFrame(({ mouse }) => {
    // const x = (mouse.x * viewport.width) / 4;
    const y = (mouse.y * viewport.height) / 2;

    descriptionRef.current.lookAt(45, y, 0);
  });

  const [matcapTexture] = useMatcapTexture("045C5C_0DBDBD_049393_04A4A4", 256);
  return (
    <Text3D
      font="/assets/fonts/helvetiker_regular.typeface.json"
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.09}
      bevelOffset={0}
      bevelSegments={5}
      ref={descriptionRef}
      rotation={[0, 1.3, 0]}
      // scale={[viewport.width / 30, viewport.height / 22, 1]}
      scale={0.35}
      // pivot={[0.5, -0.5, 0]}
      position={[-2, 0, 1.5]}
    >
      Web Developer
      <meshMatcapMaterial
        matcap={matcapTexture}
        // args={[viewport.width, viewport.height]}
      />
    </Text3D>
  );
}
