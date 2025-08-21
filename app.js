let nombres = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
         return;
    } else {
        nombres.push(nombre);
        input.value = "";
    }
    console.log(`Amigo agregado: ${nombre}`);
    console.log("Lista actual de amigos:", nombres);
}
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(function(nombre) {
        lista.innerHTML += `<li>${nombre}</li>`;
    });
    console.log("segunda lista actual de amigos:", nombres);
}
function sortearAmigo() {
   
    if (nombres.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno primero.");
        return null;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[indiceAleatorio];
    let resultadoElemento = document.getElementById("resultado");
    if (resultadoElemento) {
        resultadoElemento.innerHTML = `
            <div class="resultado-list">
                <h2>🎉 ¡Amigo sorteado! 🎉</h2>
                <p class="ganador">${amigoSorteado}</p>
                <p>De un total de ${nombres.length} amigos</p>
            </div>
        `;
    }
}