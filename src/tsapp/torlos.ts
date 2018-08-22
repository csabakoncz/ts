import THREE from 'three';

  // This is where stuff in our game will happen:
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(1,1,1)
  // This is what sees the stuff:
  var aspect_ratio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
  camera.position.z = 500;
  scene.add(camera);
  // This will draw what the camera sees onto the screen:
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // ******** START CODING ON THE NEXT LINE ********
  
  var p;
  var elozo
  var alap
  var hossz,szel, mag
  
  var anyag = new THREE.MeshNormalMaterial();
  var kocka = new THREE.BoxGeometry(1,1,1);
  elozo=[1,1,1]

  var test = new THREE.Mesh(kocka,anyag)
  
  
  //na innen kezdődik kábé
  
  document.addEventListener('keydown', function(event){
    
    var kod = event.keyCode;
    console.log('kod'+kod);
    
    //kérdés
    
    if (kod==49){ p=window.prompt('Adjon meg egy parancsot.  tegla/hossz/szelesség/magasság');
    
   //kérdés kiírása
    
    console.log(p);
    
    // válasz feldolgozása
    
    var pa=p.split('/');
    
    console.log(pa);
    
    alap=pa[0];
    console.log(alap);
    
    //test formázása
    
    // tegla
    if (alap=='tegla')   { 
    
    hossz=pa[1];
    console.log(hossz)
    szel=pa[2];
    mag=pa[3];
    
    

    kocka.scale(1/elozo[0],1/elozo[1],1/elozo[2])
    kocka.scale(szel,mag,hossz)
    elozo=[szel,mag,hossz]


    test.geometry = kocka
    
    scene.add(test)
}


   }
   
   //test forgatása
   
   // A
   if (kod==65) {
     console.log('forog')
     test.rotation.y-=0.25

     }
     
  // D
     if (kod==68) {
     console.log('forog')
     test.rotation.y+=0.25

     }
     
     // W
   if (kod==87) {
     console.log('forog')
     test.rotation.x+=0.25
 
   }
   
   // S
   if (kod==83) {
     console.log('forog')
     test.rotation.x-=0.25

   }
   
    });
  function animate(){
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  }
  animate()

declare var window:any
window.scene = scene