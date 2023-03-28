import { useEffect, useRef } from "react";
import {
  Text3D,
  useMatcapTexture,
  OrbitControls,
  Sparkles,
  Sky,
  useGLTF,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Office from "./Office";
import { Suspense } from "react";
export default function Name() {
  const textureLoader = new TextureLoader();
  const contactGltf = useLoader(GLTFLoader, "/img/models/contactModel.glb");
  const officeGltf = useGLTF("/img/models/lofi_office_optimized.glb");
  const officeTexture = textureLoader.load(
    "/img/textures/lofioffice_baked.jpg"
  );

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);
  useThree(({ camera }) => {
    camera.position.set(1.805, 1.125, 1.68);
  });
  const { viewport, mouse, camera } = useThree();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 4;
    const y = (mouse.y * viewport.height) / 2;
    nameRef.current.lookAt(45, y, 0);
    descriptionRef.current.lookAt(45, y, 0);

    if (viewport.width > 6) {
      contactRef.current.lookAt(45, y, 1);
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
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableScale={false}
        enableZoom={false}
        // onChange={() => {
        //   console.log(camera.position);
        // }}
      />
      <axesHelper />
      <Sparkles scale={40} />
      <Sky />
      <fog attach="fog" args={["#272730", 16, 30]} />

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

      <primitive
        scale={0.15}
        position={[-2, -0.5, 0.2]}
        rotation={[0, 1.5, 0]}
        object={contactGltf.scene}
        ref={contactRef}
        onClick={handleClick}
        onPointerEnter={handlePointerOver}
        onPointerLeave={handlePointerLeave}
      />

      {/* <primitive
        scale={4}
        position-y={-8}
        position-x={-6}
        position-z={-1}
        object={officeGltf.scene}
        onClick={handleClick}
        onPointerEnter={handlePointerOver}
        onPointerLeave={handlePointerLeave}
        map={officeTexture}
      /> */}
    </>
  );
}
