import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Suspense } from "react";
export default function Office() {
  const { nodes, materials } = useGLTF("/img/models/lofi_office_opt.glb");
  const textureLoader = new TextureLoader();
  const officeTexture = textureLoader.load(
    "/img/textures/lofioffice_baked2.jpg"
  );

  useEffect(() => {
    console.log(nodes);
    officeTexture.flipY = false;
  });

  return (
    <group dispose={null} position-y={-2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.couch.geometry}
        material={nodes.couch.material}
        position={[-3.03, 0.32, 0.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.76}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["couch-base"].geometry}
          material={nodes["couch-base"].material}
          position={[-0.04, -0.06, -0.07]}
          rotation={[-Math.PI, 0, 0]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.restl.geometry}
          material={nodes.restl.material}
          position={[-2.3, 0.89, 0.26]}
          rotation={[0, 1.57, 0]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cushionl.geometry}
          material={nodes.cushionl.material}
          position={[-1.67, 1.34, -0.63]}
          rotation={[1.41, 0, 0]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cushionm.geometry}
          material={nodes.cushionm.material}
          position={[0.03, 1.34, -0.63]}
          rotation={[1.41, 0, 0]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.seatl.geometry}
          material={nodes.seatl.material}
          position={[-1, 0.38, 0.18]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cushionr.geometry}
          material={nodes.cushionr.material}
          position={[1.79, 1.34, -0.63]}
          rotation={[1.41, 0, 0]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.restr.geometry}
          material={nodes.restr.material}
          position={[2.22, 0.89, 0.26]}
          rotation={[0, 1.57, 0]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.seatr.geometry}
          material={nodes.seatr.material}
          position={[1.06, 0.38, 0.18]}
        >
          <meshBasicMaterial map={officeTexture} />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mughandlge.geometry}
        material={nodes.mughandlge.material}
        position={[1.35, 1.5, -3.04]}
        rotation={[Math.PI / 2, 0, -0.76]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table.geometry}
        material={nodes.table.material}
        position={[0.9, 1.19, -2.85]}
      >
        <meshBasicMaterial map={officeTexture} />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leg1.geometry}
          material={nodes.leg1.material}
          position={[-1.65, 0.23, 0.71]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leg2.geometry}
          material={nodes.leg2.material}
          position={[-1.67, 0.23, -0.68]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leg3.geometry}
          material={nodes.leg3.material}
          position={[1.63, 0.23, -0.68]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leg4.geometry}
          material={nodes.leg4.material}
          position={[1.63, 0.23, 0.71]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rug.geometry}
        material={nodes.Rug.material}
        position={[0.57, 0.15, 1.16]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.laptop_screen.geometry}
        material={nodes.laptop_screen.material}
        position={[0.54, 1.82, -3.63]}
        rotation={[1.31, 0, 0]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.laptop_base.geometry}
        material={nodes.laptop_base.material}
        position={[0.54, 1.42, -3.17]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obase3.geometry}
        material={nodes.obase3.material}
        position={[1, 0.73, -1.21]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={[0.06, 0.04, 0.04]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor.geometry}
        material={nodes.monitor.material}
        position={[1.89, 2.44, -3.63]}
        rotation={[Math.PI / 2, 0, 0.26]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_base.geometry}
        material={nodes.monitor_base.material}
        position={[1.88, 1.42, -3.68]}
        rotation={[0, -0.26, 0]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel_2.geometry}
        material={nodes.wheel_2.material}
        position={[1.01, 0.19, -1.21]}
        rotation={[Math.PI / 2, 0, -1.3]}
        scale={0.07}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mug.geometry}
        material={nodes.mug.material}
        position={[1.42, 1.49, -3.09]}
        rotation={[0, 0.76, 0]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coffee.geometry}
        material={nodes.Coffee.material}
        position={[1.42, 1.52, -3.09]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pot.geometry}
        material={nodes.pot.material}
        position={[-2.42, 0.44, -2.36]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.room.geometry}
        material={nodes.room.material}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf4.geometry}
        material={nodes.leaf4.material}
        position={[-3.03, 0.98, -2.39]}
        rotation={[0, -1.57, 0]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KEYBOARD.geometry}
        material={nodes.KEYBOARD.material}
        position={[0.17, 1.48, -3.3]}
        scale={[0.03, 0, 0.03]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oleg2.geometry}
        material={nodes.oleg2.material}
        position={[1.01, 0.36, -1.21]}
        rotation={[Math.PI, -1.3, Math.PI]}
        scale={0.03}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oleg1.geometry}
        material={nodes.oleg1.material}
        position={[1.01, 0.36, -1.21]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={0.03}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obase.geometry}
        material={nodes.obase.material}
        position={[1, 0.46, -1.21]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={0.07}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oback.geometry}
        material={nodes.oback.material}
        position={[0.79, 1.88, -0.5]}
        rotation={[-Math.PI / 2, 0, 2.87]}
        scale={0.54}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obase2.geometry}
        material={nodes.obase2.material}
        position={[1, 0.62, -1.21]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={[0.06, 0.05, 0.05]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf2.geometry}
        material={nodes.leaf2.material}
        position={[-2.42, 0.98, -3.02]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oseat.geometry}
        material={nodes.oseat.material}
        position={[1.01, 1.53, -1.29]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={0.54}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel1.geometry}
        material={nodes.wheel1.material}
        position={[1.01, 0.19, -1.21]}
        rotation={[Math.PI / 2, 0, -2.87]}
        scale={0.07}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obar.geometry}
        material={nodes.obar.material}
        position={[1, 1.26, -1.27]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={0.07}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.raiser.geometry}
        material={nodes.raiser.material}
        position={[0.85, 0.98, -1.25]}
        rotation={[Math.PI, 0.28, 1.44]}
        scale={[0.01, 0.17, 0.01]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[0.67, 0.95, -1.31]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={-0.03}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf1.geometry}
        material={nodes.leaf1.material}
        position={[-2.42, 0.98, -1.82]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf3.geometry}
        material={nodes.leaf3.material}
        position={[-1.86, 0.98, -2.39]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window.geometry}
        material={nodes.window.material}
        position={[-4.04, 2.98, -0.87]}
        scale={[0.08, 0.86, 0.73]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window001.geometry}
        material={nodes.window001.material}
        position={[-4.02, 2.98, 2.53]}
        scale={[0.08, 0.86, 0.73]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window003.geometry}
        material={nodes.window003.material}
        position={[-1.62, 2.98, -4.04]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.08, 0.86, 0.73]}
      >
        <meshBasicMaterial map={officeTexture} />
      </mesh>
    </group>
  );
}
