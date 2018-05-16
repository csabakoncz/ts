import THREE from 'three';
import { Cube } from './cube'
import { Fly } from './fly'
import { Ground } from './ground'
import { Axes } from './axes'

var margin = 10;
var ww = () => window.innerWidth - 2 * margin;
var wh = () => window.innerHeight - 2 * margin;

var scene = new THREE.Scene();
scene.background = new THREE.Color(0.9, 0.9, 1);

var camera = new THREE.PerspectiveCamera(75, ww() / wh(), 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.shadowMapEnabled = true
renderer.setSize(ww(), wh());
document.body.appendChild(renderer.domElement);

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
    camera.aspect = ww() / wh();
    camera.updateProjectionMatrix();
    renderer.setSize(ww(), wh());
}

scene.add(Axes.create())
scene.add(Ground.create())

var cube = Cube.create();
cube.name = 'Cube'
scene.add(cube);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.name = 'Directional light'
light.position.set(-1, 0.5, 1);
light.castShadow = true
scene.add(light)

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
ambientLight.name = 'Ambient light'
scene.add(ambientLight)

var flyControl = Fly.create(camera, renderer)

var clock = new THREE.Clock()
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 5;
var animate = function (): any {
    requestAnimationFrame(animate);
    if (false) {
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
    }
    var delta = clock.getDelta();
    flyControl.update(delta);
    renderer.render(scene, camera);
};
animate();

declare global {
    interface HTMLElement {
        data: any
    }
}

var data: any = {}
renderer.domElement.data = data;
data.camera = camera
data.scene = scene
data.flyControl = flyControl