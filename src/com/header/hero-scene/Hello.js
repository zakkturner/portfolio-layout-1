import gsap from "gsap";
import { useRef, useEffect } from "react";
import {
  Text3D,
  useMatcapTexture,
  OrbitControls,
  Sky,
  Center,
} from "@react-three/drei";
import { SplitText } from "gsap/all";

export default function Hello() {
  const nameRef = useRef(null);

  const [matcapTexture] = useMatcapTexture("045C5C_0DBDBD_049393_04A4A4", 256);
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Center> */}
      <Sky />
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
        rotation-y={-0.75}
        position={[-2, -4, -10]}
        scale={1.25}
      >
        Loading..
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>

      {/* </Center> */}
    </>
  );
}
