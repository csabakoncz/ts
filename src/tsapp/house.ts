import THREE from 'three'
import { Wall } from './wall'

export class House {
    static create() {
        let LemonChiffon = 0xfffacd
        let color = LemonChiffon;
        let root = new THREE.Group();
        {
            let wall1 = Wall.create(8.5, 3, 0.5, new THREE.Color(color), []);
            root.add(wall1);
            wall1.name = 'wall1'
        }
        
        {
            let wall2 = Wall.create(12, 3, 0.5, new THREE.Color(color), []);
            root.add(wall2);
            wall2.name = 'wall2'
            wall2.rotation.y = Math.PI / 2
            wall2.position.x += 9
        }

        return root;
    }
}