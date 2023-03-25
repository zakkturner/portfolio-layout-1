import { useRef } from "react";
import {
  Text3D,
  useMatcapTexture,
  OrbitControls,
  Sparkles,
  Sky,
  Center,
} from "@react-three/drei";

import { useThree } from "@react-three/fiber";
export default function Name() {
  const nameRef = useRef(null);
  useThree(({ camera }) => {
    camera.position.set(0, 0, 15);
  });
  const { viewport } = useThree();

  const [matcapTexture] = useMatcapTexture("045C5C_0DBDBD_049393_04A4A4", 256);
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Sparkles scale={40} />
      <Sky />
      <fog attach="fog" args={["#272730", 16, 30]} />
      <Center>
        <Text3D
          //   position-x={-2}
          font="/assets/fonts/helvetiker_regular.typeface.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          ref={nameRef}
          position-y={0}
          position-x={-8}
          scale={viewport.width / 20}
        >
          Zach Turner
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
      <Center disableY={true}>
        <Text3D
          position-y={-(viewport.height / 2.5)}
          font="/assets/fonts/helvetiker_regular.typeface.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          ref={nameRef}
          scale={viewport.width / 20}
        >
          Web Developer
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </>
  );
}
