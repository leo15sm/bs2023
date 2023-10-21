//Faz algum objeto seguir o mouse
const objeto = document.getElementById('container');

objeto.id = '';
objeto.id = 'segue';

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    //muda a posição o objeto com base na posição do mouse
    objeto.style.left = mouseX + 'px';
    objeto.style.top = mouseY + 'px';
});