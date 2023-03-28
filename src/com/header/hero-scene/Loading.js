import { Text3D, useMatcapTexture } from "@react-three/drei";

export default function Loading() {
  const [matcapTexture] = useMatcapTexture("045C5C_0DBDBD_049393_04A4A4", 256);
  return (
    <Text3D
      //   position-x={-2}
      font="/assets/fonts/helvetiker_regular.typeface.json"
      size={0.35}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      rotation-y={1}
      position={[-2, 0, 0]}
      scale={1.25}
    >
      Loading . . .
      <meshMatcapMaterial matcap={matcapTexture} />
    </Text3D>
  );
}
