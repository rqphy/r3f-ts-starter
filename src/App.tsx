import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Experience from "./components/Experience"

function App() {
	return (
		<>
			<Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
				<color attach="background" args={["#ececec"]} />
				<OrbitControls />

				<Experience />
			</Canvas>
		</>
	)
}

export default App
