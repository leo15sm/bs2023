const objeto = document.getElementById('container');
objeto.id = '';
objeto.id = 'container';

objeto.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const objetoRect = objeto.getBoundingClientRect();
    
    //calculando as coordenada do centro do elemento
    const objetoCenterX = objetoRect.left + objetoRect.width / 2;
    const objetoCenterY = objetoRect.top + objetoRect.height / 2;
    
    //calculando a distância do mouse pro centro do elemento
    const offsetX = mouseX - objetoCenterX;
    const offsetY = mouseY - objetoCenterY;
    
    //define o valor em graus que o objeto vai rotacionar
    const rotationX = (offsetY / objetoRect.height) * 45;
    const rotationY = (offsetX / objetoRect.width) * 45;  

    objeto.style.transform = `rotateX(${-rotationX}deg) rotateY(${-rotationY}deg)`;
});

objeto.addEventListener('mouseleave', () => {
    objeto.style.transform = 'rotateX(0deg) rotateY(0deg)';
});