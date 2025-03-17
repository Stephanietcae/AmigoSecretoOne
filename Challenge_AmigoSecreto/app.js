//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo'); // Obtém o campo de entrada pelo ID
    let nome = input.value.trim(); // Captura o valor e remove espaços extras

    // Verificando se o nome foi inserido
    if (nome == ""){
        alert("Por favor, insira um nome.");
        return;
    }

    // Verificando se o nome já foi adicionado a lista anteriormente
    if (amigos.includes(nome)){
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";

    //console.log(`${nome} foi adicionado! Lista atual:`, amigos);
}

function atualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];

        lista.appendChild(li);
    }
}

function sortearAmigo(){
    // Validando se há amigos cadastrados
    if (amigos.length === 0){
        alert("Adicione amigos antes de sortear!");
        return;
    }

    // Gerando um índice aleatório do tamanho da lista
    const indiceSorteado = Math.floor(Math.random()*amigos.length);

    // Sorteando o amigo
    const amigoSorteado = amigos[indiceSorteado];
    amigos.splice(indiceSorteado, 1);   // Remove o nome do array

    atualizarLista();

    // Exibindo o resultado
    const amigoResultado = document.getElementById('resultado');
    amigoResultado.innerHTML += `
        <li class="sorteado">
            🎉 ${amigoSorteado} foi sorteado(a)!
        </li>
    `;
}

function reiniciarSorteio() {
    amigos = [];    // Limpa o array principal
    document.getElementById('listaAmigos').innerHTML = '';  // Limpa a lista visual
    document.getElementById('resultado').innerHTML = '';    // Limpa os resultados
    document.getElementById('amigo').value = '';    // Reseta o campo de input
    //console.log('Sorteio reiniciado!');
}