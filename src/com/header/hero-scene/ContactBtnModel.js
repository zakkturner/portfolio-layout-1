import { useRef, useContext } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  ModalContext,
  ModalDispatchContext,
} from "../../../context/ModalContext";
export function ContactBtnModel() {
  const contactGltf = useLoader(GLTFLoader, "/img/models/contactModel.glb");
  const contactRef = useRef(null);
  const { viewport } = useThree();
  const modalActive = useContext(ModalContext);
  const dispatch = useContext(ModalDispatchContext);

  useFrame(({ mouse }) => {
    const y = (mouse.y * viewport.height) / 2;

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
  const handleClick = () => {
    dispatch({
      type: "opened",
      openedByModel: true,
    });
  };

  return (
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
  );
}
