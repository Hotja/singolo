/* ---------------------- Navigation Tab start-----------------------*/
const NAVIGATION = document.getElementById('nav-menu');

NAVIGATION.addEventListener('click', (event) => { 
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
 });
/* ---------------------- Navigation Tab end-----------------------*/
/* ---------------------- Submit form start -----------------------*/
const FORMA = document.getElementById('FORMA');
const CLOSE_BUTTON = document.getElementById('close-submit');
let Subject_text = document.getElementById('msg-Subject');
let Describe_text = document.getElementById('msg-Describe');
let message_block = document.getElementById('message-block');


FORMA.addEventListener('submit', (event) => {
   event.preventDefault();
   const Subject = document.getElementById('Subject').value.toString();
   const Describe = document.getElementById('Describe').value.toString();

   Subject_text.innerText = Subject;
   Describe_text.innerText = Describe;
   message_block.classList.toggle('hidden');
   CLOSE_BUTTON.addEventListener('click', () => { 
   message_block.classList.toggle('hidden');
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
const Slider_show = document.getElementById('slider');
const Slider = document.getElementById('slider2');

Slider_show.addEventListener('click', (event) => { 
   if(event.target.classList.contains('navLinks')) {
      Slider.classList.toggle('slider2_OFF');
   }
});

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



