const targetElements = document.getElementsByClassName('rotate');
let degree = 0

function rotateHeader() {
  degree = degree + 6;
  degree = degree % 360;

  Array.from(targetElements).forEach(element => {
    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
      element.classList.add('rotate--face');
      element.classList.remove('rotate--back');
    } else {
      element.classList.add('rotate--back');
      element.classList.remove('rotate--face');
    }
    element.style.transform = 'rotateX(' + degree + 'deg)';
  });
}

setInterval(rotateHeader, 20);
