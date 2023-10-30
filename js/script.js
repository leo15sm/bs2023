var script = document.createElement("script");

document.getElementById("btn-seguir").addEventListener("click", function() {
    loadScript("./js/seguir.js");
});

document.getElementById("btn-padrao").addEventListener("click", function() {
    loadScript("./js/padrao.js");
});

document.getElementById("btn-sombra").addEventListener("click", function() {
    loadScript("./js/sombra.js");
});

document.getElementById("btn-perfil").addEventListener("click", function() {
    loadScript("./js/perfil.js");
});

function loadScript(scriptSrc) {
    script.src = scriptSrc;
    document.body.appendChild(script);
}

