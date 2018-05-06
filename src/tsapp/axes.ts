import THREE from 'three'

export class Axes {
    static create() {
        var parent = new THREE.Object3D();
        parent.name = 'Axes'
        var x = new THREE.Line(Axes.line(10, 0, 0), new THREE.LineBasicMaterial({ color: 0xff0000 }))
        x.name = 'X';
        parent.add(x);
        var y = new THREE.Line(Axes.line(0, 10, 0), new THREE.LineBasicMaterial({ color: 0x00ff00 }))
        y.name = 'Y';
        parent.add(y);
        var z = new THREE.Line(Axes.line(0, 0, 10), new THREE.LineBasicMaterial({ color: 0x0000ff }))
        z.name = 'Z';
        parent.add(z);
        return parent;
    }

    static line(x, y, z) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(-x, -y, -z),
            new THREE.Vector3(x, y, z),
        );
        return geometry
    }
}