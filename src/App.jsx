import { Canvas } from "@react-three/fiber";
import {
  Box,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Claw from "./assets/Claw";
import { Sphere } from "@react-three/drei";

import {
  SphereGeometry,
  EdgesGeometry,
  LineSegments,
  LineBasicMaterial,
} from "three";

function WireframeSphere() {
  const geometry = new SphereGeometry(200, 64, 32);
  const material = new LineBasicMaterial({ color: 0x295e1e });
  const wireframe = new EdgesGeometry(geometry);
  const lines = new LineSegments(wireframe, material);

  return <primitive object={lines}></primitive>;
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#001C00" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, -200]} />
        <Environment preset='city' />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Claw position={[50, 15, 0]} scale={0.3} rotation={[-1.65, 0, -1.4]} />
        <WireframeSphere />
      </Canvas>
    </div>
  );
}
