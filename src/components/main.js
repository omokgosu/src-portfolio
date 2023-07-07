import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Boxes } from "./CarShow/Boxes";
import { Car } from "./CarShow/Car";
import { Ground } from "./CarShow/Ground";
import { FloatingGrid } from "./CarShow/FloatingGrid";
import { Rings } from "./CarShow/Rings";
import '../styles/main.css'

function CarShow() {
    return (
      <>
        <OrbitControls 
          target={[0, 0.35, 0]}
          maxPolarAngle={1.45}
        />
  
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
  
        <color args={[0, 0, 0]} attach="background" />
  
        <CubeCamera resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <Car />
            </>
          )}
        </CubeCamera>
  
        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={2}
          angle={0.6}
          penumbra={0.5}
          position={[-5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <Ground />
        <FloatingGrid />
        <Boxes />
        <Rings />
  
        <EffectComposer>
          {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
          <Bloom
            blendFunction={BlendFunction.ADD}
            intensity={1.3} // The bloom intensity.
            width={300} // render width
            height={300} // render height
            kernelSize={5} // blur kernel size
            luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={[0.0005, 0.0012]} // color offset
          />
        </EffectComposer>
      </>
    );
  }

export default function Main() {
    return (
      <main className="main">
        <div className="mainInner">
            <h3>Safe Road Club &#40; SRC &#41;</h3>
            <p>Turn your daily driving into passive income.</p>
            <ul>
                <li>
                    <a 
                        href="https://testflight.apple.com/join/a2eEql39"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src='/assets/icons/main/play_store.svg' alt="플레이스토어 이미지"/>
                        <span>PLAY STORE</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="https://testflight.apple.com/join/a2eEql39"
                        target="_blank"
                        rel="noopener noreferrer"
                    >   
                        <img src='/assets/icons/main/app_store.svg' alt="앱스토어 이미지"/>
                        <span>APP STORE</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className="car">
            <Suspense fallback={null}>
                <Canvas shadows>
                    <CarShow />
                </Canvas>
            </Suspense>
        </div>
      </main>
    );
  }
