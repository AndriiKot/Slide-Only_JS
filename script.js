const button_prev = document.querySelector('.prev');
const button_next = document.querySelector('.next');
const photos = document.querySelectorAll('.photos');
let i = 0;

button_prev.onclick = function() {
  photos[i].hidden = true;
  console.dir(photos[i])
  // console.log(photos)
}

