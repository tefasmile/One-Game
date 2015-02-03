/**Juego de piedra, papel o tijera en JS***/

var usuarioElige = prompt("¿Piedra,Papel o Tijera?");
var computadoraElige = Math.random();//computadora al azar.

//Indicaciones de computadora
if((computadoraElige >= 0)&&(computadoraElige <= 0.33)){
    alert("piedra");   
} else if((computadoraElige >= 0.34)&&(computadoraElige <= 0.66)){
    alert("papel");   
}else{
    alert("tijera");  
} 