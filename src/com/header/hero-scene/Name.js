import { useEffect, useRef } from "react";
import {
  Text3D,
  useMatcapTexture,
  OrbitControls,
  Sparkles,
  Sky,
  Center,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import gsap from "gsap";

export default function Name() {
  const contactGltf = useLoader(GLTFLoader, "/img/models/contactModel.glb");
  const officeGltf = useLoader(GLTFLoader, "/img/models/lofi_office.glb");

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);
  useThree(({ camera }) => {
    camera.position.set(0, 0, 15);
  });
  const { viewport, mouse } = useThree();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 1.5;
    const y = (mouse.y * viewport.height) / 2;
    // nameRef.current.lookAt(45, y, 0);

    if (viewport.width > 18) {
      console.log("YEas", viewport.width);
      contactRef.current.lookAt(x, y, 1);
    }
  });
  const handlePointerOver = (e) => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerLeave = (e) => {
    document.body.style.cursor = "auto";
  };
  const handleClick = (e) => {
    contactRef.current.translation();
  };
  useEffect(() => {
    // if (!nameRef.current) return;
    console.log(viewport.getCurrentViewport().width);
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
      {/* <OrbitControls enableZoom={false} /> */}
      <Sparkles scale={40} />
      <Sky />
      <fog attach="fog" args={["#272730", 16, 30]} />
      <Center>
        <Text3D
          font="/assets/fonts/helvetiker_regular.typeface.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.09}
          bevelOffset={0}
          bevelSegments={5}
          ref={nameRef}
          position={[viewport.width / -80, 0, 0]}
          scale={[viewport.width / 40, viewport.height / 22, 1]}
          pivot={[0.5, -0.5, 0]}
        >
          Zach Turner
          <meshMatcapMaterial
            matcap={matcapTexture}
            args={[viewport.width, viewport.height]}
          />
        </Text3D>
      </Center>
      <Center disableY={true}>
        <Text3D
          font="/assets/fonts/helvetiker_regular.typeface.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.09}
          bevelOffset={0}
          bevelSegments={5}
          ref={descriptionRef}
          position={[viewport.width / -80, -(viewport.height / 6), 0]}
          scale={[viewport.width / 30, viewport.height / 22, 1]}
          pivot={[0.5, -0.5, 0]}
        >
          Web Developer
          <meshMatcapMaterial
            matcap={matcapTexture}
            // args={[viewport.width, viewport.height]}
          />
        </Text3D>
      </Center>
      <Center disableY={true}>
        <primitive
          scale={1}
          position-y={-8}
          object={contactGltf.scene}
          ref={contactRef}
          onClick={handleClick}
          onPointerEnter={handlePointerOver}
          onPointerLeave={handlePointerLeave}
        />
      </Center>

      <primitive
        scale={1}
        position-y={-8}
        position-x={-4}
        object={officeGltf.scene}
        onClick={handleClick}
        onPointerEnter={handlePointerOver}
        onPointerLeave={handlePointerLeave}
      />
    </>
  );
}
