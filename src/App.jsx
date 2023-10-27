import { Box } from "@react-three/drei";
import "./App.css";
import Experince from "./Layouts/Experince";
import Overlay from "./Layouts/Overlay";
import { Canvas } from "@react-three/fiber";
import studio from "@theatre/studio";
import { OrbitControls } from "@react-three/drei";
import { getProject } from "@theatre/core";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";

studio.initialize();

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{
            position: [5, 5, -5],
            fov: 75,
          }}
        >
          <Experince />
        </Canvas>
      </div>
      <div className="overlay-container">
        <Overlay />
      </div>
    </>
  );
}

export default App;
