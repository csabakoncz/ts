import THREE from 'three'

export class Wall {

    static create(xdim: number, ydim: number, zdim: number, color: THREE.Color, windows: THREE.Box2[]) {
        var root = new THREE.Group()
        var geometry = new THREE.BoxGeometry(xdim, ydim, zdim);
        var material = new THREE.MeshPhongMaterial({ color: color });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.x = xdim / 2
        cube.position.y = ydim / 2
        cube.position.z = - zdim / 2
        root.add(cube);
        return root;
    }

}