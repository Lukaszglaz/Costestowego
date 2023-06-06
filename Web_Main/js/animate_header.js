const clickBox = document.querySelector('.box-image');
const mainSection = document.querySelector('.main-section');
const testNavigate = document.querySelector('.text-navigate');

let isMoved = false;

function handleClick() {
  if (isMoved) {
    mainSection.classList.remove('show');
    setTimeout(function() {
      testNavigate.style.display = 'block';
    }, 100);
    isMoved = false;
  } else {
    mainSection.classList.add('show');
    testNavigate.style.display = 'none';
    isMoved = true;
  }
}

clickBox.addEventListener('click', handleClick);

const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
  li.addEventListener('mouseover', () => {
    li.querySelector('a').classList.add('mouseover-animate');
  });

  li.addEventListener('mouseout', () => {
    li.querySelector('a').classList.remove('mouseover-animate');
  });
});