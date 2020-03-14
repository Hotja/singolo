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
/* ---------------------- Portfolio Border end - ------------------*/
/* ---------------------- Slider start ----------------------------*/
