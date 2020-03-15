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

FORMA.addEventListener('submit', (event) => {
   event.preventDefault();
   const Subject = document.getElementById('Subject').value.toString();
   const Describe = document.getElementById('Describe').value.toString();

   document.getElementById('msg-Subject').innerText = Subject;
   document.getElementById('msg-Describe').innerText = Describe;
   document.getElementById('message-block').classList.remove('hidden');
   
});

CLOSE_BUTTON.addEventListener('click', () => { 
   document.getElementById('msg-Subject').innerText = '';
   document.getElementById('msg-Describe').innerText = '';
   document.getElementById('message-block').classList.add('hidden');
});
/* ---------------------- Submit form end -------------------------*/
/* ---------------------- Portfolio Border start ------------------*/
const Picture_Border = document.getElementById('foto');

Picture_Border.addEventListener('click', (event) => { 
   Picture_Border.querySelectorAll('img').forEach(el => el.classList.remove('active-pic'));
   event.target.classList.add('active-pic');
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
/* ---------------------- Slader end ----------------------------*/
/* ---------------------- Portfolio randomize start -------------*/
const Portfolio_nav = document.getElementById('portfolio-nav');

Portfolio_nav.addEventListener('click', (event) => { 
   Portfolio_nav.querySelectorAll('li').forEach(el => el.classList.remove('portfolio-active'));
   event.target.classList.add('portfolio-active');
   event.target.classList.remove('active-pic');
   Picture_Border.classList.toggle('pic-reverse');
});
/* ---------------------- Portfolio randomize end ---------------*/



