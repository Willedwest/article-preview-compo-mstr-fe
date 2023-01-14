//Getting nodeElement from the DOM 
const shareBtn = document.querySelector('.sharebtn');

let secondSec = document.querySelector('.secondSec');

let links = document.querySelectorAll('a');


//Giving instruction to the button to display the sharelink board after its click and remove if its clicked again.
shareBtn.addEventListener('click', () => {

  secondSec.classList.toggle('active');

});


//Removing the sharelink board from displaying after the clicking of any of the links icons.
links.forEach((pages) => {
  pages.addEventListener('click', (e) => {
    secondSec.classList.remove('active');
  });
});