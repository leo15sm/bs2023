const objeto = document.getElementById('container');

objeto.id = '';
objeto.id = 'shandow';
objeto.id = 'container';

objeto.addEventListener('mousemove', (e) => {
    const rect = objeto.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    
    const percentX = offsetX / (rect.width / 2);
    const percentY = offsetY / (rect.height / 2);
    
    const depth = 20;
    
    objeto.style.transform = `scale3d(${1 - Math.abs(percentX * 0.05)}, ${1 - Math.abs(percentY * 0.05)}, 1)`;
    objeto.style.boxShadow = `${-offsetX}px ${-offsetY}px ${depth}px rgba(0, 0, 0, 0.2)`;
});

objeto.addEventListener('mouseleave', () => {
    objeto.style.transform = 'scale3d(1, 1, 1)';
    objeto.style.boxShadow = 'none';
});
