const button_prev = document.querySelector('.prev');
const button_next = document.querySelector('.next');
const photos = document.querySelectorAll('.photos img');
const i_max = photos.length - 1;
const i_min = 0;
let i_next = i_min;



button_next.onclick = function() {
  photos[i_next].style.display = 'none';
  if (i_next < i_max) {
    i_next++;
  } else {
    i_next = i_min;
  }
  photos[i_next].style.display = 'block'
}

button_prev.onclick = function() {
  photos[i_next].style.display = 'none';
  if (i_next > i_min) {
    i_next--;
  } else {
    i_next = i_max;
  }
  photos[i_next].style.display = 'block';
}

