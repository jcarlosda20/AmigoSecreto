// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
const listaAmigos = [];
const inputamigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Funciones

function agregarAmigo(){
    //Verifica si se ingreso un nombre
    if (inputamigo.value==""){
        alert("Debe ingresar un Nombre de Amigo");
        return;
    }
    //Se ingresa nombres en la lista
    listaAmigos.push(inputamigo.value);
    ulListaAmigos.innerHTML += `<li>${inputamigo.value}</li>`;
    limpiar();

};
// Limpia el input 
function limpiar(){
    inputamigo.value=""
}
//Funcion para reralizar el sorteo
function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

}
// Funcion reiniciar juego
function reiniciarJuego(){
    inputamigo.value = "";
    ulResultado.value = "";
    ulListaAmigos.innerHTML = "";
    listaAmigos="";
    console.log("Reiniciar");
}
