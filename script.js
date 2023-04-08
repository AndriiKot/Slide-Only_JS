const button_prev = document.querySelector('.prev');
const button_next = document.querySelector('.next');
const photos = document.querySelectorAll('.photos img');
let i_next = 0;
let i_prev = photos.lenght - 1;

button_next.onclick = function() {
  photos[i_next].style.display = 'none';
  i_next++;
  photos[i_next].style.display = 'block'
}

