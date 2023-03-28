import { useEffect, useRef } from "react";
import {
  Text3D,
  useMatcapTexture,
  OrbitControls,
  Sparkles,
  Sky,
  useGLTF,
} from "@react-three/drei";

import { useFrame, useThree, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { ContactBtnModel } from "./ContactBtnModel";
import NameModel from "./NameModel";
import JobModel from "./JobModel";

export default function Experience() {
  const { viewport, mouse, camera } = useThree();

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  useThree(({ camera }) => {
    // camera.position.set(1.805, 1.125, 1.68);
    camera.position.set(
      1.175280693421712,
      1.0835007413398088,
      1.357605586198903
    );
  });

  const [matcapTexture] = useMatcapTexture("045C5C_0DBDBD_049393_04A4A4", 256);
  return (
    <>
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableScale={false}
        enableZoom={false}
        onChange={() => console.log(camera.position)}
      />

      <Sky />

      <NameModel />

      <JobModel />

      <ContactBtnModel />
    </>
  );
}
