


 //********************************************************
 //
 //  FONCTIONS UTILES 
 //
 //********************************************************











 //tracer un point 
 

 
 // tracer un segment 


 function segment(MaScene,A,B,CoulHexa,epai){
  var geometry = new THREE.Geometry();
  geometry.vertices.push(A,B);
  let segAB = new THREE.Line(geometry, new THREE.LineDashedMaterial
  ({ // pas besoin de retour chariot dans le fichier js
  color: CoulHexa,
  linewidth: epai,
  })); // fin variable segAB
  MaScene.add( segAB );
  } // fin fonction segment [AB]
  


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//++++++++++++++++++++++MaterialPHONG+++++++++++++++++++++++++++++++

function MaterialPHONG(CoulHexa)
{
   MaterialPhong  = new THREE.MeshPhongMaterial({
      color: CoulHexa, // couleur de l’objet
opacity: 1,
transparent: true,
emissive:0x00000, //couleur emissive
specular:"#000000", //couleur speculaire
flatShading: true,
shininess:10,//brillance
//side: THREE.DoubleSide,//2
side: THREE.FrontSide,//0
//side: THREE.BackSide,//1
   });
   return MaterialPhong ;
} 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// fonction polygone dans un cercle 

function polygone(n,R)
{
      let tab1 = [];
      let tab2 = []
      // initilisattion des tab  \
      var i = 0;
      var theta=0 ; 
      for (i= 0 ; i<n   ; i++)
      {
         tab1[i]=0;
         tab2[i]=0;}
         
      for(i=0 ; i<n-1; i++ )
      {  theta = i/n*2*Math.PI;
         tab1[i]=R*Math.cos(theta);
         tab2[i]=R*Math.sin(theta);
      }
      for(i=0 ; i<n-1; i++ )
      {
         segment(scene,tab1[i],tab2[i],"#808080",2) ;
      }

}





// un plan d'equation z=0
function planZ0(MaScene, largPlan,hautPlan,posX,posY,posZ,nbSegmentLarg,nbSegmentHaut ,CoulHexa )
{
let planGeometry = new THREE.PlaneGeometry(largPlan,hautPlan,nbSegmentLarg,nbSegmentHaut);
let MaterialPhong = new THREE.MeshPhongMaterial({
   color: CoulHexa, // couleur de l’objet
opacity: 0.9,
transparent: true,
emissive:0x00000, //couleur emissive
specular:"#090909", //couleur speculaire
flatShading: true,
shininess:100,//brillance
//side: THREE.DoubleSide,//2
side: THREE.FrontSide,//0
//side: THREE.BackSide,//1
});;
// definir la surface a afficher
let planPhong = new THREE.Mesh(planGeometry,MaterialPhong );
//permettre les ombres 
planPhong.castShadow = false ;
planPhong.receiveShadow = false ;
planPhong.position.x = posX ;
planPhong.position.y = posY ; 
planPhong.position.z = posZ ;
MaScene.add(planPhong) ; 
return planPhong  ; 
}



// faccette triangulaire 



















// facettes quadratique 

function Face4(Mascene,A,B,C,D,CoulHexa)
{
   let faceGeom = new THREE.Geometry(); // def de la facxe geometrique 
   
   faceGeom.vertices = [A, B, C, D ];// def des sommets 
   faceGeom .faces = [
      new THREE.Face3 ( 0, 1, 2 ), //A, B, C
      new THREE.Face3 ( 0, 2, 3 ), //A, C, D
      ];
      
      MaterialPhong = MaterialPHONG(CoulHexa);
      let faceQuad = new THREE.Mesh( faceGeom, MaterialPhong );
      Mascene.add(faceQuad);
}


// parallelepipede rectangle ()important 

function ParaRect(Mascene,largeur,hauteur,profondeur,largSegments,hautSegments,profSegments,posX,posY,posZ,CoulHexa )

{
   let BoiteGeom = new THREE.BoxGeometry (largeur, hauteur,
      profondeur, largSegments, hautSegments, profSegments );//   definition du parallelepipede rect


      MaterialPhong  = MaterialPHONG(CoulHexa);

      

      let BoiteGeomPhong = new THREE.Mesh(BoiteGeom,MaterialPhong);
      //posotionnement
      BoiteGeomPhong.position.set(posX,posY,posZ);
      // ombrage
      BoiteGeomPhong.castShadow = true ; 
      BoiteGeomPhong.receiveShadow =true ;
      Mascene.add(BoiteGeomPhong);
   }
  


   // cree un cube grace au arretes 


// cree un  sphere 

function sphere(MaScene,rayon,posX,posY,posZ,CoulHexa)
{

   let sphereGeom = new  THREE.SphereGeometry (rayon ,
      100, 100,0,2*Math.PI,0,Math.PI);
      MaterialPhong = MaterialPHONG(CoulHexa) ;
   let spherePhong =  new  THREE.Mesh(sphereGeom,MaterialPhong);
   // positionnement
    
   spherePhong.position.set(posX,posY,posZ);
   // ombrage 
   spherePhong.castShadow = true;
spherePhong.receiveShadow = true;

MaScene.add(spherePhong);
return spherePhong ;


}


// cree une cyclone 







// courbe de bezier de degrer 2 

function bezier2(MaScene,P0,P1,P2,CoulHexa)
{
   let cbeBez = new THREE.QuadraticBezierCurve3 (P0, P1, P2 );
   //Propriete geometrique de la courbe
   let cbeGeometry = new THREE.Geometry();
   // Points de la courbe de Bezier
   cbeGeometry.vertices = cbeBez.getPoints(100);
   //Aspect de la courbe
   let material = new THREE.LineBasicMaterial(
   { color : CoulHexa ,
   linewidth: 2
   } );
   // Courbe de Bezier avec les proprietes geometriques et l’aspect
   let BezierQuadratique = new THREE.Line( cbeGeometry, material );
   //Renvoi de la courbe pour une utilisation ulterieure
   MaScene.add(BezierQuadratique)
   return (BezierQuadratique);
}

// courbe de bezier cubique 

function bezier3(MaScene,P0,P1,P2,P3,CoulHexa)
{
   let cbeBez = new THREE.CubicBezierCurve3(P0, P1, P2, P3);
//Propriete geometrique de la courbe
let cbeGeometry = new THREE.Geometry();
// Points de la courbe de Bezier
cbeGeometry.vertices = cbeBez.getPoints(100);
//Aspect de la courbe
let material = new THREE.LineBasicMaterial(
{ color : CoulHexa,
linewidth: 2
} );
// courbe de Bezier avec les proprietes geometriques et l’aspect
let BezierCubique = new THREE.Line( cbeGeometry, material );
//Renvoi de la courbe pour une utilisation ulterieure
MaScene.add(BezierCubique);
return (BezierCubique);
} // fin fonction TraceBezierCubique

// function pour un cercle 


function motif(MaScene,R,nb,P,coul)
{
   
   let points1= new Array(nb/2+1);
   for(var k=0;k<=nb/2;k++){
      let t2=Math.PI/2+k/nb*Math.PI; 
      t2=t2.toPrecision(5);
      let x0=R*Math.cos(t2);
      let z0=R*Math.sin(t2);    
      points1[k] = new THREE.Vector3(x0,0,z0);
     }
   
     let points2= new Array(nb+1);
     for(var k=0;k<=nb;k++){
        let t2=Math.PI/2+k/nb*Math.PI; 
        t2=t2.toPrecision(5);
        let x0=R*Math.cos(t2);
        let y0=R*Math.sin(t2);    
        points2[k] = new THREE.Vector3(x0,y0,0);
       }

       let points3= new Array(nb+1);
       for(var k=0;k<=nb;k++){
         let t2=-Math.PI/2+k/nb*Math.PI; 
         t2=t2.toPrecision(5);
         let z0=R*Math.cos(t2);
         let y0=R*Math.sin(t2);    
         points3[k] = new THREE.Vector3(0,y0,z0);
        }
      


        //  courbe decaler 
        let points4= new Array(nb+1);
        for(var k=0;k<=nb;k++){
         let t2=-(Math.PI/2+k/nb*Math.PI); 
         t2=t2.toPrecision(5);
         let x0=R*Math.cos(t2);
         let z0=R*Math.sin(t2);    
         points4[k] = new THREE.Vector3(x0,0,z0);
        }
      
        let points5= new Array(nb/2+1);
        for(var k=0;k<=nb/2;k++){
           let t2=-(Math.PI/2+k/nb*Math.PI); 
           t2=t2.toPrecision(5);
           let x0=R*Math.cos(t2);
           let y0=R*Math.sin(t2);    
           points5[k] = new THREE.Vector3(x0,y0,0);
          }
   
          let points6= new Array(nb+1);
          for(var k=0;k<=nb;k++){
            let t2=(Math.PI/2+k/nb*Math.PI); 
            t2=t2.toPrecision(5);
            let z0=R*Math.cos(t2);
            let y0=R*Math.sin(t2);    
            points6[k] = new THREE.Vector3(0,y0,z0);
           }
    
      let points = points1.concat(points2,points3,points4,points5,points6);
    

 
     let PtsCbePara = new THREE.BufferGeometry().setFromPoints(points);
     let ProprieteCbe = new THREE.LineBasicMaterial( { 
      color: coul,
      linewidth:50 
     } );
     
     let courbePara = new THREE.Line(PtsCbePara  , ProprieteCbe );
     courbePara.position.set(P.x,P.y,P.z);
     MaScene.add(courbePara);
     return  courbePara  ;
     

}

// les lathes

  // material 
  function surfPhong(geom,coulD,transpa,bolTrans,coulSpe){ 
   let Material = new THREE.MeshPhongMaterial({
     color: coulD,
     opacity: transpa,
     transparent: bolTrans,
     //     wireframe: false,
     specular:coulSpe, 
     flatShading: true,
     side: THREE.DoubleSide,
   });
   let maillage = new THREE.Mesh(geom,Material);
   return maillage;
  }//fin fonction surfPhong

  function latheBezTab(MaScene,nbePtCbe,nbePtRot,tabP,coul,opacite,bolTranspa){
   let tabp= new Array(tabP.length);
   for (let j=0;j<tabp.length;j++)
     tabp[j]= new THREE.Vector2(tabP[j].x,tabP[j].y);
   // points de la courbe de Bezier
   let points = new Array(nbePtCbe+1);
   for(let k=0;k<=nbePtCbe;k++){
     let t2=k/nbePtCbe; 
     t2=t2.toPrecision(5);
     let v0= new THREE.Vector2(0,0);
     v0.addScaledVector(tabp[0],Ber(t2,0,tabp.length-1));
     for(let j=1;j<tabp.length;j++){
       let v1= new THREE.Vector2(0,0);
       v1.addScaledVector(tabp[j],Ber(t2,j,tabp.length-1));
       v0.add(v1);
     }
     points[k] = new THREE.Vector2(v0.x,v0.y);
   }
   let latheGeometry = new THREE.LatheGeometry(points,nbePtRot,0,2*Math.PI); 
   let lathe = surfPhong(latheGeometry,coul,opacite,bolTranspa,"#223322");
   MaScene.add(lathe);
   return lathe;
  }//fin latheBezTab
  
  
  

//********************************************************************************************************************************************** */
  // fonction utiles 
  
  function fact(n){
	if (n>1)
		return n*fact(n-1);
		else return 1;
}

function Ber(t1,i,n) {
  var val=0;
  switch(i){
    case 0 :  val=Math.pow(1.-t1,n);
              break;
    case n :  val=Math.pow(t1,n);
              break;
    default : val=(fact(n)/fact(i)/fact(n-i)*Math.pow(1.-t1,n-i)*Math.pow(t1,i));
  }
  val=testZero(val);
 	return val.toPrecision(5);
}
//***************************************************************************************************************************** */
  

function boule(Mascene,rayon,P,selfcoul,othercoul)
{
   
   let boule = sphere(Mascene,rayon,P.x,P.y,P.z,selfcoul);
   let c1 = motif(Mascene,rayon,150,P,othercoul);
   const group = new THREE.Group();
   group.add(boule);
   group.add(c1);
  // Mascene.add(group)
   return group ;
}
 //************************************************************************************************************************************************ */

function init(){
 var stats = initStats();
    // creation de rendu et de la taille
 let rendu = new THREE.WebGLRenderer({ antialias: true });
 rendu.shadowMap.enabled = true;
 let scene = new THREE.Scene();   
 let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
 rendu.shadowMap.enabled = true;
 rendu.setClearColor(new THREE.Color(0x000000));
 rendu.setSize(window.innerWidth*.9, window.innerHeight*.9);
 cameraLumiere(scene,camera);
 lumiere(scene);

    

 //********************************************************
 //
 //  P A R T I E     G E O M E T R I Q U E
 //
 //********************************************************



 
 

function piste()
{
   planZ0(scene,90,200,0,0,-4,50,50,"#000000");
   planZ0(scene,10,200,0,0,-4,50,50,"#B1B1B1");
   //  quadrilliage 
   y=-100;
   x=45
   for(var i=0 ; i<78; i++)
   {

         
let m1 =new THREE.Vector3(45,y,-4);
let M1 = new THREE.Vector3(-45,y,-4);
segment(scene,M1,m1,"#B1B1B1",10);
let L1 = new THREE.Vector3(x,-100,-4);

let l1 =new THREE.Vector3(x,100,-4);

segment(scene,L1,l1,"#B1B1B1",10);

x-=1.15 ;
y+=2,56;
   }

 //  parois ouest
   let planO = planZ0(scene,50,200,-45,0,-4,50,50,"#000000"); 
   planO.rotateY(1.57);
 

 
   
   // les parois  ouest
   let A1 = new  THREE.Vector3(45,-100,-4);
   let B1  = new  THREE.Vector3(45,-100,20);
   let C1 =new  THREE.Vector3(45,100,20);
   let D1  =new  THREE.Vector3(45,100,-4);
   Face4(scene,A1,B1,C1,D1,"#000000");
}
 piste();


let P = new THREE.Vector3(22,0,-1);
let P2 = new THREE.Vector3(-22,0,-1);
let boule1 = boule(scene,2,P,"#288BA8","#E838445");
scene.add(boule1);
let boule2 = boule(scene,2,P2,"#E838445","#288BA8");
scene.add(boule2);
 
// position des quilles dela mene droite 
let Q1 = new THREE.Vector3(22.2,-45,-4);
let Q2 = new THREE.Vector3(24.2,-47,-4);
let Q3 = new THREE.Vector3(20.2,-47,-4);
let Q4 = new THREE.Vector3(26.2,-49,-4);
let Q5 = new THREE.Vector3(22.2,-49,-4);
let Q6 = new THREE.Vector3(18.2,-49,-4);
let Q7 = new THREE.Vector3(28.2,-51,-4);
let Q8 = new THREE.Vector3(24.2,-51,-4);
let Q9 = new THREE.Vector3(20.2,-51,-4);
let Q10 = new THREE.Vector3(16.2,-51,-4);
// position des quille de la mene gauche 
let Q1g = new THREE.Vector3(-22.2,-45,-4);
let Q2g = new THREE.Vector3(-24.2,-47,-4);
let Q3g = new THREE.Vector3(-20.2,-47,-4);
let Q4g = new THREE.Vector3(-26.2,-49,-4);
let Q5g = new THREE.Vector3(-22.2,-49,-4);
let Q6g = new THREE.Vector3(-18.2,-49,-4);
let Q7g = new THREE.Vector3(-28.2,-51,-4);
let Q8g = new THREE.Vector3(-24.2,-51,-4);
let Q9g = new THREE.Vector3(-20.2,-51,-4);
let Q10g = new THREE.Vector3(-16.2,-51,-4);


//   tableau des quilles 
let tabQuille  =  new Array(20) ;

// quilles  a droite 
let quille1 = Quille(scene,Q1);
scene.add(quille1);
tabQuille[0] = quille1 ;

let quille2 = Quille(scene,Q2);
scene.add(quille2);
tabQuille[1] = quille2 ;

let quille3 = Quille(scene,Q3);
scene.add(quille3);
tabQuille[2] = quille3;


let quille4= Quille(scene,Q4);
scene.add(quille4);
tabQuille[3] = quille4 ;

let quille5 = Quille(scene,Q5);
scene.add(quille5);
tabQuille[4] = quille5;

let quille6 = Quille(scene,Q6);
scene.add(quille6);
tabQuille[5] = quille6 ;

let quille7 = Quille(scene,Q7);
scene.add(quille7);
tabQuille[6] = quille7 ;

let quille8 = Quille(scene,Q8);
scene.add(quille8);
tabQuille[7] = quille8 ;

let quille9 = Quille(scene,Q9);
scene.add(quille9);
tabQuille[8] = quille9 ;
let quille10 = Quille(scene,Q10);
scene.add(quille10);
tabQuille[9] = quille10 ;

//quille a gauche 

let quille1g = Quille(scene,Q1g);
scene.add(quille1g);
tabQuille[10] = quille1g ;

let quille2g = Quille(scene,Q2g);
scene.add(quille2g);
tabQuille[11] = quille2g;

let quille3g = Quille(scene,Q3g);
scene.add(quille3g);
tabQuille[12] = quille3g;


let quille4g= Quille(scene,Q4g);
scene.add(quille4g);
tabQuille[13] = quille4g ;


let quille5g = Quille(scene,Q5g);
scene.add(quille5g);
tabQuille[14] = quille5g ;

let quille6g = Quille(scene,Q6g);
scene.add(quille6g);
tabQuille[15] = quille6g;

let quille7g = Quille(scene,Q7g);
scene.add(quille7g);
tabQuille[16] = quille7g ;
let quille8g = Quille(scene,Q8g);
scene.add(quille8g);
tabQuille[17] = quille8g ;

let quille9g = Quille(scene,Q9g);
scene.add(quille9g);
tabQuille[18] = quille9g ;

let quille10g = Quille(scene,Q10g);
scene.add(quille10g);
tabQuille[19] = quille10g;





function animation(Mascene,traj,boule,tab,choixPiste)
{

  //Propriete geometrique de la courbe
   let cbeGeometry= new THREE.Geometry();
   
   // Points de la courbe de Bezier1
   cbeGeometry.vertices = traj.getPoints(40);
  
   let  i  = 0;
   
   var score1 = 0 ;
   var score2 = 0; 
   
    let anim = setInterval(function () {
        boule.position.set( cbeGeometry.vertices[i].x, cbeGeometry.vertices[i].y, cbeGeometry.vertices[i].z);
        boule.rotateX(i*Math.PI/800) ; 
         if(choixPiste==1)
         {
            for ( var k  = 0 ; k<10; k++)
        { 
        let b =boule.children[0]; 
        let q = tabQuille[k].children[1];
         if(estTouchee(b,q))
         {
         Mascene.remove(tabQuille[k]) ;
        ParaRect(Mascene,2,1,1,1,1,1,tab[k].position.x,tab[k].position.y,tab[k].position.z,"#FFFFFF");
         score1 ++ ;       
         document.getElementById("PtsN1").value = score1 ; 
         }
        }

         }
         if(choixPiste==2){
            for ( var k  = 10 ; k<20; k++)
        {
         let b =boule.children[0]; 
        let q = tabQuille[k].children[1];
         if(estTouchee(b,q))
         {tab[k].rotateX(Math.Pi/2)   ; 
          Mascene.remove(tabQuille[k]) ;
         ParaRect(Mascene,2,1,1,1,1,1,tab[k].position.x,tab[k].position.y,tab[k].position.z,"#FFFFFF");
         score2++;       
         document.getElementById("PtsB1").value = score2 ; 
             }
        }


         }

            if(boule.position.y<-50)
            {
               clearInterval(anim) ;
               scene.remove(boule) ; 
            }
          
       
          i++ ;
       },20);


  
}






 //********************************************************
 //
 // F I N      P A R T I E     G E O M E T R I Q U E
 //
 //********************************************************
 
 //********************************************************
 //
 //  D E B U T     M E N U     G U I
 //
 //********************************************************


//+++++++++++++++++++++++++++++++++++++++++++++++++CAMERA++++++++++++++++++++++++++++++++++++++++
 let gui = new dat.GUI();//interface graphique utilisateur
 let menuGUI = new function () {
 // propriete de la camera
 this.cameraxPos = camera.position.x;
 this.camerayPos = camera.position.y;
 this.camerazPos = camera.position.z;
 this.cameraZoom = 1;
 this.cameraxDir = 0;
 this.camerayDir = 0;
 this.camerazDir = 0;
 this.LancerJoueurBleu = 0;
 this.LancerJoueurRouge = 0;
 this.positionBoule1 =22,5 ; 
 this.positionBoule2=-22,5 ; 

 }



 let guiCamera = gui.addFolder("Camera");

 guiCamera.add(menuGUI,"cameraxPos",-10,10).onChange(function () {
 camera.position.set(menuGUI.cameraxPos, camera.position.y,camera.position.z );
 //document.getElementById("PosX").value=menuGUI.cameraxPos;
 camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir);
 });

 guiCamera.add(menuGUI,"camerayPos",-20,20).onChange(function () {
 camera.position.set(camera.position.x,menuGUI.camerayPos,camera.position.z );
 //document.getElementById("PosY").value=menuGUI.camerayPos;
 camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir);
 });

 guiCamera.add(menuGUI,"camerazPos",-20,20).onChange(function () {
 camera.position.set(camera.position.x,camera.position.y,menuGUI.camerazPos );
 //document.getElementById("PosZ").value=menuGUI.camerazPos;
 });

 guiCamera.add(menuGUI,"cameraZoom",-20,20).onChange(function () {
    camera.position.set(menuGUI.cameraxPos* menuGUI.cameraZoom, menuGUI.camerayPos*menuGUI.cameraZoom, menuGUI.camerazPos*menuGUI.cameraZoom);
    camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir)
   // document.getElementById("result").innerHTML+=menuGUI.cameraZoom+"<br/>"
  });
 
   // abscisse de la direction de la camera dans le menu
   guiCamera.add(menuGUI,"cameraxDir",-10,10).onChange(function () {
    camera.position.set(menuGUI.cameraxPos*menuGUI.cameraZoom, menuGUI.camerayPos*menuGUI.cameraZoom, menuGUI.camerazPos*menuGUI.cameraZoom);
    // ecriture des proprietes de la camera dans html
    //actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
    camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir);
    /*affichage de la direction en fonction de l'abscisse dans le tableau */
    //document.getElementById("DirX").value=menuGUI.camerazPos;
   });
   // ordonnée de la direction de la camera dans le menu
   guiCamera.add(menuGUI,"camerayDir",-10,10).onChange(function () {
    camera.position.set(menuGUI.cameraxPos*menuGUI.cameraZoom, menuGUI.camerayPos*menuGUI.cameraZoom, menuGUI.camerazPos*menuGUI.cameraZoom);
    // ecriture des proprietes de la camera dans html
    //actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
    camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir);
    /*affichage de la direction en fonction de l'ordonnée dans le tableau */
   // document.getElementById("DirY").value=menuGUI.camerazPos;
   });
   // cote de la direction de la camera dans le menu
   guiCamera.add(menuGUI,"camerazDir",-10,10).onChange(function () {
    camera.position.set(menuGUI.cameraxPos*menuGUI.cameraZoom, menuGUI.camerayPos*menuGUI.cameraZoom, menuGUI.camerazPos*menuGUI.cameraZoom);
    // ecriture des proprietes de la camera dans html
    //actuaPosCameraHTML(menuGUI.cameraxPos, menuGUI.camerayPos, menuGUI.camerazPos,menuGUI.cameraxDir,menuGUI.camerayDir, menuGUI.camerazDir);
    camera.lookAt(menuGUI.cameraxDir, menuGUI.camerayDir, menuGUI.camerazDir);
    /*affichage de la direction en fonction de la cote dans le tableau */
    //document.getElementById("DirZ").value=menuGUI.camerazPos;
    });

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    let guiJeu = gui.addFolder("Jeu");
   
    guiJeu.add(menuGUI,"LancerJoueurBleu",[1,2]).onChange(function(e){
      if(e==1){
         let traj1boul1 = trajectoirePiste1(boule1,1);
         animation(scene,traj1boul1,boule1,tabQuille,1);
         

      }
      else{ 
         let traj2boul1= trajectoirePiste1(boule1,2);
         animation(scene,traj2boul1,boule1,tabQuille,1);
         
      }
    });

    guiJeu.add(menuGUI,"LancerJoueurRouge",[1,2]).onChange(function(e){
      if(e==1){
         let traj1boul2 = trajectoirePiste2(boule2,1);
         animation(scene,traj1boul2,boule2,tabQuille,2);
        
         
      }
      else{
         let traj2boul2= trajectoirePiste2(boule2,2);
         animation(scene,traj2boul2,boule2,tabQuille,2);
         
      }
    });
     guiJeu.add(menuGUI,"positionBoule1",-10,20).onChange(function()
    {
      boule1.position.set(menuGUI.positionBoule1,P.y,P.z) ;
      scene.add(boule1);

    });
    guiJeu.add(menuGUI,"positionBoule2",-20,10).onChange(function()
    {
      boule2.position.set(menuGUI.positionBoule2,P2.y,P2.z) ;
      scene.add(boule2);

    });



 //********************************************************
 //
 //  F I N     M E N U     G U I
 //
 //********************************************************
 renduAnim();
 
 
  // ajoute le rendu dans l'element HTML
 document.getElementById("webgl").appendChild(rendu.domElement);
 
  // affichage de la scene
 rendu.render(scene, camera);
  
 
 function reAffichage() {
  setTimeout(function () { 
 
  }, 200);// fin setTimeout(function ()
    // render avec requestAnimationFrame
  rendu.render(scene, camera);
 }// fin fonction reAffichage()
 
 
  function renduAnim() {
    stats.update();
    // render avec requestAnimationFrame
    requestAnimationFrame(renduAnim);
// ajoute le rendu dans l'element HTML
    rendu.render(scene, camera);
  }
 
} // fin fonction init()