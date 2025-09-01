//el principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el probl

let amigos = [];

      function agregarAmigo() {
      let input = document.getElementById("amigo");
      let nombre = input.value.trim();

      if (nombre === "") {
        alert("Por favor escribe un nombre válido");
        return;
      }
      
      if (amigos.includes(nombre)) {
        alert("Ese nombre ya esta en la lista");
        input.value = "";
        input.focus();
        return
      }
      
      amigos.push(nombre);
      mostrarAmigos();

      input.value = "";
      input.focus();

    }

    function mostrarAmigos() {
      let ul = document.getElementById("listaAmigos");
      listaAmigos.innerHTML = "";
      for (let i = 0; i < amigos.length; i++) {
        li = document.createElement("lista");
        li.textContent = amigo[i];
        ul.appendChild(li);
      }
      console.log("Lista de amigos", amigos);
    }

    

    function sortearAmigo() {
        if (amigos.length === 0) {
        alert("La lista de amigos esta vacia");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];

    document.getElementById("resultado").innerHTML =
    `Tu amigo secreto es: ${amigoSecreto}`
}