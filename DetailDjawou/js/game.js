
function estTouchee(Object1,Object2)
{

let Bound1 = new THREE.Box3().setFromObject(Object1);

let Bound2= new THREE.Box3().setFromObject(Object2);

return Bound1.intersectsBox(Bound2);
}