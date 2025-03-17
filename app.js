let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim(); 

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);

    amigoInput.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');  

    listaAmigos.innerHTML = "";
 
    amigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `¡Tu amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
