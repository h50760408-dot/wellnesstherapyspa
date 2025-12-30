const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');

let index = 0;

function moveSlide() {
  index++;
  if (index >= dots.length) index = 0;

  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

setInterval(moveSlide, 4000);
