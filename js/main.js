// document.querySelector('#focus').style.background = getRandomColor()

var array = ['Frontend engineering', 'Product Design',  'Balance.'];



array.forEach(function (el,index) {
  setTimeout(function () {
    document.querySelector('#focus').innerHTML = el;
    console.log(el);
  }, index * 2000);
})
