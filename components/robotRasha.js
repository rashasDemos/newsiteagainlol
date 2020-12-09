import { useRef } from "react";
import { useLoader } from "react-three-fiber";
import GLTFLoader from "three-gltf-loader";

export default function RoRasha({mouse}) {
    const {nodes} = useLoader(GLTFLoader, "./Xbot.glb")
    console.log(nodes)
    const bot = useRef()
    return (
        <group ref={bot}>
            <mesh visible geometry={nodes["Beta_Joints"].geometry} rotation={[-0.5,0,0]} scale={[30,30,30]}>
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={1}
                    metalness={0}
                    />
            </mesh>
        </group>
    )
}