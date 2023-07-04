const clickBox = document.querySelector('.box-image');
const mainSection = document.querySelector('.main-section');
const textNavigate = document.querySelector('.text-navigate');
const navigateSec = document.querySelector('.section-navigate');
const listItem = document.querySelector('.main-section .section-navigate .navigate-box ul');
const TextHide = document.querySelector('.text-navigate');

function handleClick() {
  navigateSec.classList.toggle('hide');
  navigateSec.classList.toggle('show');
  if (navigateSec.classList.contains('show')) {
    navigateSec.style.display = 'flex';
    TextHide.style.animation = 'fadeOut 0.5s ease 0s 1 forwards';
  } else {
    setTimeout(() => {
      TextHide.style.animation = 'fadeIn 0.5s ease 0s 1 forwards';
    }, 100); 
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 576) {
    if (navigateSec.classList.contains('hide')) {
      navigateSec.style.display = 'none';
      
    }
  } else {
    navigateSec.style.display = 'flex';
    navigateSec.classList.add('hide');
    navigateSec.classList.remove('show');
  }
});


clickBox.addEventListener('click', handleClick);


const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  li.addEventListener('mouseover', () => {
    if (window.innerWidth < 1024) {
      li.querySelector('a').classList.add('mouseover-animate');
    }
  });

  li.addEventListener('mouseout', () => {
    if (window.innerWidth < 1024) {
      li.querySelector('a').classList.remove('mouseover-animate');
    }
  });
});

