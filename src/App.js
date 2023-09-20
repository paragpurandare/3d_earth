import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import "./App.css";
import {Earth} from "./components/earth/Earth";
import {TopSection} from "./components/topsection/TopSection";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return <CanvasContainer>
    <TopSection/>
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  </CanvasContainer>;
}

export default App;
