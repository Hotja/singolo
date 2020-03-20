/* ---------------------- Navigation Tab start-----------------------*/
const NAVIGATION = document.getElementById('nav-menu');

NAVIGATION.addEventListener('click', (event) => { 
   NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
   event.target.classList.add('active');
});

document.addEventListener('scroll', onScroll);

function onScroll (event) {

   const curPos = window.scrollY + 95;
   const divs = document.querySelectorAll('body > div');
   const links = document.querySelectorAll('#nav-menu a');

   console.log(curPos);
   console.log(links);
   
   divs.forEach((el) => {
   if (el.offsetTop <= curPos )
      links.forEach((a) => {
         a.classList.remove('active');
         if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active');
         }
      })
   }); 
}
/* ---------------------- Navigation Tab end-----------------------*/
/* ---------------------- Submit form start -----------------------*/
const FORMA = document.getElementById('FORMA');
const CLOSE_BUTTON = document.getElementById('close-submit');
const Subject_text = document.getElementById('msg-Subject');
const Describe_text = document.getElementById('msg-Describe');
const message_block = document.getElementById('message-block');


FORMA.addEventListener('submit', (event) => {
   event.preventDefault();
   const Subject = document.getElementById('Subject').value.toString();
   const Describe = document.getElementById('Describe').value.toString();

   Subject_text.innerText = (Subject) ? Subject : "Без темы";
   Describe_text.innerText = (Describe) ? Describe : "Без описания";

   message_block.classList.toggle('hidden');
   CLOSE_BUTTON.addEventListener('click', () => { 
      document.getElementById('Subject').value = "";
      document.getElementById('Describe').value = "";    
      message_block.classList.remove('hidden');
   });
});
/* ---------------------- Submit form end -------------------------*/
/* ---------------------- Portfolio Border start ------------------*/
const Picture_Border = document.getElementById('foto');

Picture_Border.addEventListener('click', (event) => { 
   if(event.target.classList.contains('pic')) {
   Picture_Border.querySelectorAll('img').forEach(el => el.classList.remove('active-pic'));
   event.target.classList.add('active-pic');
   }
 });
/* ---------------------- Portfolio Border end --------------------*/
/* ---------------------- Phone picture start ---------------------*/
const iphone1 = document.getElementById('iphone1pic');
const layer1 = document.getElementById('layer1pic');
const iphone2 = document.getElementById('iphone2pic');
const layer2 = document.getElementById('layer2pic');

iphone1.addEventListener('click', () => {
layer1.classList.toggle('layerOFF');
});
iphone2.addEventListener('click', () => {
layer2.classList.toggle('layerOFF');
});
/* ---------------------- Phone picture end ---------------------*/
/* ---------------------- Slider start --------------------------*/

const slidecarousel = document.querySelector('#slide-carousel');
const divcarousel = document.querySelectorAll('#slide-carousel .slides');
const moveL = document.querySelector('.navLinksL');
const moveR = document.querySelector('.navLinksR');
let counter = 1;
const size = divcarousel[0].clientWidth;

slidecarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

moveR.addEventListener('click', () => {
   if (counter >= divcarousel.length - 1) return;
   slidecarousel.style.transition = "transform 0.4s ease-in-out";
   counter++;
   slidecarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
   console.log(counter);

});

moveL.addEventListener('click', () => {
   if (counter <= 0) return;
   slidecarousel.style.transition = "transform 0.4s ease-in-out";
   counter--;
   slidecarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
   console.log(counter);
});

slidecarousel.addEventListener('transitionend', () => {
   if (divcarousel[counter].id === 'slideLast'){
      slidecarousel.style.transition = "none";
      counter = divcarousel.length - 2;
      slidecarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
      console.log(counter);
   }
   if (divcarousel[counter].id === 'slideFirst'){
      slidecarousel.style.transition = "none";
      counter = divcarousel.length - counter;
      slidecarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
      console.log(counter);
   }
})

/* ---------------------- Slader end ----------------------------*/
/* ---------------------- Portfolio randomize start -------------*/
const Portfolio_nav = document.getElementById('portfolio-nav');

Portfolio_nav.addEventListener('click', (event) => {
   if(event.target.classList.contains('portfolio-nav')) { 
   Portfolio_nav.querySelectorAll('li').forEach(el => el.classList.remove('portfolio-active'));
   event.target.classList.add('portfolio-active');
   Picture_Border.querySelectorAll('img').forEach(el => el.classList.remove('active-pic'));
   }
   if(event.target.classList.contains('portfolio-nav')) {
      let array = Picture_Border.querySelectorAll('img');    
      Picture_Border.appendChild(array[0]);
   }
});
/* ---------------------- Portfolio randomize end ---------------*/



