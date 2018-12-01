function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// document.querySelector('#focus').style.background = getRandomColor()

var array = ['Frontend engineering', 'Product Design', 'Computational Design', 'Balance'];
array.forEach(function (el,index) {
  setTimeout(function () {
    document.querySelector('#focus').innerHTML = el;
    console.log(el);
  }, index * 2000);
})
