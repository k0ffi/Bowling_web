


function trajectoirePiste1(boule,choix)
{ 
   let t1 = new  THREE.Vector3(boule.position.x,boule.position.y,boule.position.z);
   let t2 = new  THREE.Vector3(16,-10,boule.position.z);
   let t3 = new  THREE.Vector3(15.4,-40,boule.position.z);
   let t4 = new  THREE.Vector3(5,-51,boule.position.z);
   let cbeBez1 = new THREE.CubicBezierCurve3(t1,t2,t3,t4);

   let t5 = new  THREE.Vector3(boule.position.x,boule.position.y,boule.position.z);
   let t6 = new  THREE.Vector3(boule.position.x,-30,boule.position.z);
   let t7 = new  THREE.Vector3(boule.position.x,-40,boule.position.z);
   let t8 = new  THREE.Vector3(boule.position.x,-51,boule.position.z);
   let cbeBez2 = new THREE.CubicBezierCurve3(t5,t6,t7,t8);


   if(choix ==1)
   {
    return cbeBez2 ; 
   }
   if(choix==2)
   {
    return cbeBez1 ;
   }
}




function trajectoirePiste2(boule ,choix)
{

    let t1 = new  THREE.Vector3(boule.position.x,boule.position.y,boule.position.z);
    let t2 = new  THREE.Vector3(-16,-10,boule.position.z);
    let t3 = new  THREE.Vector3(-15.4,-40,boule.position.z);
    let t4 = new  THREE.Vector3(-2,-51,boule.position.z);
    let cbeBez1 = new THREE.CubicBezierCurve3(t1,t2,t3,t4);
 
    let t5 = new  THREE.Vector3(boule.position.x,boule.position.y,boule.position.z);
    let t6 = new  THREE.Vector3(boule.position.x,-30,boule.position.z);
    let t7 = new  THREE.Vector3(boule.position.x,-40,boule.position.z);
    let t8 = new  THREE.Vector3(boule.position.x,-51,boule.position.z);
    let cbeBez2 = new THREE.CubicBezierCurve3(t5,t6,t7,t8);
 

    if(choix ==1)
    {
     return cbeBez2 ; 
    }
    if(choix==2)
    {
     return cbeBez1 ;
    }

   


}