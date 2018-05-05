import THREE from 'three';
import { Cube } from './cube'
import { Fly } from './fly'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var cube = Cube.create();
cube.name='Cube'
scene.add(cube);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.name='Directional light'
light.position.set(-1, 0.5, 1);
scene.add(light)

var ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
ambientLight.name='Ambient light'
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

window.th = window.th || {}
window.th.camera = camera
window.th.scene = scene
window.th.flyControl = flyControl