import './styles/style.css'
import {Scene, PerspectiveCamera, WebGLRenderer, TextureLoader, Mesh, IcosahedronGeometry, MeshStandardMaterial, CubeTextureLoader, PMREMGenerator} from 'three'
import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.0/dist/tweakpane.min.js';
import MeshSphere from "./meshes/MeshSphere";

export class WebglApp {
    constructor({mapSrc, hdrPath, hdrSrc}){

        // Canvas
        const canvas = document.getElementById("webgl");

        const renderer = new WebGLRenderer({ 
            canvas: canvas,
            antialias: false,
            alpha: true,
        });
        
        
        renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        
        //Load Assets
        const mapTexture = new TextureLoader().load(mapSrc);
        const hdrEnv = new CubeTextureLoader().setPath(hdrPath).load(hdrSrc);

// Scena
const scene = new Scene(); 
scene.environment = hdrEnv

// Camera
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 1;
scene.add(camera);


//sphere
const sphere = new MeshSphere({mapTexture, hdrEnv})
scene.add(sphere)


// Events
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});


// Animate
const tick = (time) => {
  sphere?.onTick(time)
  renderer.render(scene, camera);
};

gsap.ticker.add(tick)
    }
}

