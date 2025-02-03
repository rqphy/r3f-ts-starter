import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
    return (
        <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
            <OrbitControls />
            <color attach="background" args={["#ececec"]} />
            <ambientLight />
            <directionalLight
                castShadow
                position={[2, 2, -2]}
                intensity={4.5}
            />

            <mesh castShadow position={[0, 0.5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
            <mesh
                receiveShadow
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, 0, 0]}
            >
                <circleGeometry args={[3, 32]} />
                <meshStandardMaterial color={"pink"} />
            </mesh>
        </Canvas>
    )
}
