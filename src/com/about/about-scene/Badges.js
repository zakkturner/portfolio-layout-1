import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

import { useEffect } from "react";
export default function Badges() {
  const { setSize } = useThree();

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSize]);

  const jsGltf = useLoader(GLTFLoader, "/img/models/js.glb");
  const phpGltf = useLoader(GLTFLoader, "/img/models/php.glb");
  const laravelGltf = useLoader(GLTFLoader, "/img/models/laravel.glb");
  const reactGltf = useLoader(GLTFLoader, "/img/models/react.glb");
  const phpRef = useRef();
  const phpHover = useRef(false);
  const jsRef = useRef();
  const jsHover = useRef();
  const reactRef = useRef();
  const reactHover = useRef();
  const laravelRef = useRef();
  const laravelHover = useRef();
  useFrame(() => {
    jsRef.current.rotation.y -= 0.005;
    phpRef.current.rotation.x -= 0.005;
    reactRef.current.rotation.z -= 0.005;
    laravelRef.current.rotation.z -= 0.005;
    laravelRef.current.rotation.y -= 0.005;
    if (phpHover.current === true) {
      phpRef.current.rotation.x -= 0.01;
    }
    if (jsHover.current === true) {
      jsRef.current.rotation.y -= 0.01;
    }
  });

  useThree(({ camera }) => {
    camera.position.set(0, 0, 5);
  });

  return (
    <>
      <primitive
        position-x={-1.7}
        position-y={2}
        object={jsGltf.scene}
        ref={jsRef}
        onPointerOver={() => (jsHover.current = true)}
        onPointerLeave={() => (jsHover.current = false)}
        // scale={[-viewport.width, -viewport.height, 1]}
        scale={0.75}
      />
      <primitive
        position-x={1}
        position-y={2}
        scale={0.55}
        object={phpGltf.scene}
        ref={phpRef}
        onPointerOver={() => (phpHover.current = true)}
        onPointerLeave={() => (phpHover.current = false)}
      />
      <primitive
        position-x={-1.7}
        scale={0.25}
        position-y={-0.7}
        object={laravelGltf.scene}
        ref={laravelRef}
        onPointerOver={() => (laravelHover.current = true)}
        onPointerLeave={() => (laravelHover.current = false)}
      />
      <primitive
        position-x={1}
        position-y={-0.5}
        scale={0.75}
        object={reactGltf.scene}
        ref={reactRef}
        onPointerOver={() => (reactHover.current = true)}
        onPointerLeave={() => (reactHover.current = false)}
      />
    </>
  );
}
