

 function Base(scene,nbPtCB,nbPtRot,coul,P0,P1,P2,P3){

    let tabP= new Array(4);
    for (let k=0;k<tabP.length;k++){
       tabP[k]= new THREE.Vector3(0,0,0);
     }
     tabP[0]=P0;
     tabP[1]=P1;
     tabP[2]=P2;
     tabP[3]=P3;

     let lathe1 = latheBezTab(scene,nbPtCB,nbPtRot,tabP,coul,0.95,false);
;
    lathe1.rotateX(Math.PI/2);
    //lathe1.translateZ(25);
    //lathe1.translateY(-4);
    scene.add(lathe1);
    return lathe1;
}

function body(scene,nbPtCB,nbPtRot,coul,P0,P1,P2,P3)

{
  let tabP= new Array(4);
  for (let k=0;k<tabP.length;k++){
     tabP[k]= new THREE.Vector3(0,0,0);
   }
   tabP[0]=P0;
   tabP[1]=P1;
   tabP[2]=P2;
   tabP[3]=P3;

   let lathe1 = latheBezTab(scene,nbPtCB,nbPtRot,tabP,coul,0.95,false);
;
  lathe1.rotateX(Math.PI/2);
  
  scene.add(lathe1);
  return lathe1;

}

function head(scene,nbPtCB,nbePtRot,M3,N1,N2,N3){

  let tabP3= new Array(4);
  for (let k=0;k<tabP3.length;k++){
     tabP3[k]= new THREE.Vector3(0,0,0);
   }
   tabP3[0]=M3;
   tabP3[1]=N1;
   tabP3[2]=N2;
   tabP3[3]=N3;

  let lathe3 = latheBezTab(scene,nbPtCB,nbePtRot,tabP3,"#FFFFFF",0.95,false);
  lathe3.rotateX(Math.PI/2);
  scene.add(lathe3);
  
  return lathe3;

}

function moveQuille(quille,movX,movY, movZ)
{
  quille.translateX(movX);
  quille.translateY(movY);
  quille.translateZ(movZ);
}

function Quille(scene,P)
{
  let P0 = new THREE.Vector3(0.5,0.02);
  let P1 = new THREE.Vector3(1,1);
  let P2 = new THREE.Vector3(0.71,1.57);
  let P3 = new THREE.Vector3(0.5,1.984);

  let M1 = new THREE.Vector3(0.29,2.29);
  let M2 = new THREE.Vector3(0.33,2.65);
  let M3 = new THREE.Vector3(0.374,2.88);

  let N1 = new THREE.Vector3(0.6,3.21);
  let N2 = new THREE.Vector3(0.2,3.517);
  let N3 = new THREE.Vector3(0,4);

  
  let H=head(scene,50,150,"#FFFFFF",M3,N1,N2,N3);
  let b=body(scene,50,150,"#FF0000",P3,M1,M2,M3);
  let B=Base(scene,50,150,"#FFFFFF",P0,P1,P2,P3);

 let quille = new THREE.Group();
 quille.add(H);
 quille.add(b);
 quille.add(B);
 moveQuille(quille,P.x,P.y,P.z);
 
 return quille;

}

