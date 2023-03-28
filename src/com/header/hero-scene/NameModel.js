import { useEffect, useRef } from "react";
import { Text3D, useMatcapTexture } from "@react-three/drei";

import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function NameModel() {
  const { viewport } = useThree();

  const nameRef = useRef(null);

  useFrame(({ mouse }) => {
    const y = (mouse.y * viewport.height) / 2;
    nameRef.current.lookAt(45, y, 0);
  });

  useEffect(() => {
    gsap.from(nameRef.current.material, {
      opacity: 0,
      ease: "linear",
      repeat: -1,
      duration: 2,
    });
  }, []);

  const [matcapTexture] = useMatcapTexture("045C5C_0DBDBD_049393_04A4A4", 256);
  return (
    <>
      <Text3D
        font="/assets/fonts/helvetiker_regular.typeface.json"
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.09}
        bevelOffset={0}
        bevelSegments={5}
        ref={nameRef}
        position={[-2, 0.5, 1.5]}
        scale={0.35}
        pivot={[0.5, -0.5, 0]}
        rotation={[0, 1.3, 0]}
      >
        Zach Turner
        <meshMatcapMaterial
          matcap={matcapTexture}
          args={[viewport.width, viewport.height]}
        />
      </Text3D>
    </>
  );
}
