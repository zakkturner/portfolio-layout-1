import { OrbitControls, Sky } from "@react-three/drei";

import { useThree } from "@react-three/fiber";

import { ContactBtnModel } from "./ContactBtnModel";
import NameModel from "./NameModel";
import JobModel from "./JobModel";

export default function Experience() {
  const { camera } = useThree();

  useThree(({ camera }) => {
    // camera.position.set(1.805, 1.125, 1.68);
    camera.position.set(
      1.175280693421712,
      1.0835007413398088,
      1.357605586198903
    );
  });

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
