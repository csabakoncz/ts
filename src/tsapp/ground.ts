import THREE from 'three'

export class Ground {
    static create() {
        var shape = new THREE.PlaneGeometry(100, 100)
        var cover = new THREE.MeshPhongMaterial({
            color: 0xf4f4c1
        })
        var ground = new THREE.Mesh(shape, cover);
        ground.name = 'Ground'
        ground.rotation.set(-Math.PI / 2, 0, 0);
        ground.position.y = -0.5

        ground.receiveShadow = true
        return ground;
    }
}