function openModal() {
    var modal = document.getElementById("modal-perfil");
    var img = document.getElementById("foto-perfil");
    var modalImg = document.getElementById("modal-fundo");
    modal.style.display = "block";
    modalImg.src = img.src;
}
  
function closeModal() {
    var modal = document.getElementById("modal-perfil");
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    var modal = document.getElementById("modal-perfil");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}