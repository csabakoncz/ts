import THREE from 'three';
import 'three-fly-controls'

export class Fly {
    static create(camera: THREE.Camera, renderer: THREE.WebGLRenderer) {
        var controls = new THREE.FlyControls(camera);

        controls.movementSpeed = 1;
        controls.domElement = renderer.domElement;
        controls.rollSpeed = Math.PI / 24;
        controls.autoForward = false;
        controls.dragToLook = true;

        return controls;

    }
}