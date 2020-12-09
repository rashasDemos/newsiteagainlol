import {Suspense} from "react";
import { Canvas, useLoader } from "react-three-fiber";
import GLTFLoader from "three-gltf-loader"


export function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function ArWing() {
  const {nodes} = useLoader(GLTFLoader, "./scene.glb");
  console.log(nodes)
    return (
      <group>
        <mesh visible geometry={nodes.Root.geometry}>
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>
      </group>
    );
  }