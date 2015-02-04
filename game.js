/**Juego de piedra, papel o tijera en JS***/

//Creacion de variables
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

//¡Las dos opciones son iguales!
var comparar = function(eleccion1, eleccion2){
	if(eleccion1 === eleccion2){
		return ("¡Es un empate");
	}
};

//¿Qué pasa si la eleccion1 es piedra?
var comparar = function(eleccion1, eleccion2){
	if(eleccion1 === eleccion2){
		return ("¡Es un empate");
	}
	if (eleccion1 === "piedra") {
		if (eleccion2 === "tijera") {
			return ("piedra gana");
		}else{
			return ("papel gana");
		}
	}
};