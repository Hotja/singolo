const NAVIGATION = document.getElementById('nav-menu');
const FORMA = document.getElementById('FORMA');
const CLOSE_BUTTON = document.getElementById('close-submit');


NAVIGATION.addEventListener('click', (event) => { 
    NAVIGATION.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
 });

 FORMA.addEventListener('submit', () => { 
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

