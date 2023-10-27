import "./App.css";
import Experince from "./Layouts/Experince";
import Overlay from "./Layouts/Overlay";
import { Canvas } from "@react-three/fiber";

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
