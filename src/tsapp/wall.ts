import THREE from 'three'

export class Wall {

    static create(xdim: number, ydim: number, zdim: number, color: THREE.Color, windows: THREE.Box2[]) {
        var root = new THREE.Group()
        var material = new THREE.MeshPhongMaterial({ color: color });
        
        var x=0

        windows.forEach(window=>{
            
            Wall.addCube(x,0,window.min.x-x,ydim,zdim,material,root);
            var w = window.max.x-window.min.x
            Wall.addCube(window.min.x,0,w,window.min.y,zdim,material,root);
            Wall.addCube(window.min.x,window.max.y,w,ydim-window.max.y,zdim,material,root);

            x=window.max.x
        })

        var w=xdim-x
        var h=ydim

        Wall.addCube(x,0,w,h,zdim,material,root);

        return root;
    }
    static addCube(x:number, y:number, w: number, h: number, zdim: number, material: THREE.Material, root: THREE.Group){
        var geometry = new THREE.BoxGeometry(w, h, zdim);
        var cube = new THREE.Mesh(geometry, material);

        cube.position.x = x+w / 2
        cube.position.y = y+h / 2
        cube.position.z = - zdim / 2
        cube.receiveShadow = true
        cube.castShadow = true
        root.add(cube);
    }

}