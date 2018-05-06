import THREE from 'three';

export class Cube {
    static create() {
        var w = 1;
        var h = 1;
        var d = 1;
        var geometry = new THREE.BoxGeometry(w, h, d);
        var material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.x = w / 2
        cube.position.y = h / 2
        cube.position.z = -d / 2

        cube.castShadow = true
        return cube;
    }
}