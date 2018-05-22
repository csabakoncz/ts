import THREE from 'three'
import { Wall } from './wall'

export class House {
    static makeBox(xmin: number, ymin:number, width: number, height: number){

        let min = new THREE.Vector2(xmin,ymin)
        let max = new THREE.Vector2(xmin+width,ymin+height)
        
        return new THREE.Box2(min,max)

    }
    static create() {
        let width = 8.5
        let length = 12
        let height = 3
        let thickness = 0.5

        let LemonChiffon = 0xfffacd
        let color = LemonChiffon;
        let root = new THREE.Group();

        {
            let windowWidth = 0.6
            let windowHeight = 1.5
            let window1 = House.makeBox(2,1,windowWidth,windowHeight)
            let wall1 = Wall.create(width, height, thickness, new THREE.Color(color), [window1]);
            root.add(wall1);
            wall1.name = 'wall1'
        }
        
        {
            let wall2 = Wall.create(length, height, thickness, new THREE.Color(color), []);
            root.add(wall2);
            wall2.name = 'wall2'
            wall2.rotation.y = Math.PI / 2
            wall2.position.x += width
        }

        {
            let wall3 = Wall.create(width, height, thickness, new THREE.Color(color), []);
            root.add(wall3);
            wall3.name = 'wall3'
            wall3.rotation.y = Math.PI
            wall3.position.x += width
            wall3.position.z -= length
        }

        {
            let wall4 = Wall.create(length, height, thickness, new THREE.Color(color), []);
            root.add(wall4);
            wall4.name = 'wall4'
            wall4.rotation.y = 3*Math.PI/2
            wall4.position.z -= length
        }

        return root;
    }
}