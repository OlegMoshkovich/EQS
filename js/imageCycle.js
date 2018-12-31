
const images = ['url(../img/horse_lover.png)','url(../img/fog.png)','url(../img/horses-beauty.png)','url(../img/horses-pack.png)','url(../img/horse-lover-2.png)']
const imageCycle = () => {
  const imageRandom =  Math.floor(Math.random()*images.length);
  document.querySelector('.navigation__nav').style.backgroundImage=images[imageRandom]
}
document.querySelector('.navigation__button').addEventListener('click',()=>{
  imageCycle();
})
