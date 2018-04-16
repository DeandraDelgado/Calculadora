/* crear lista dinamica 

var body = document.querySelector('body')

var titulo = document.createElement('h1');
titulo.innerHTML=" Esto es dinamico";
titulo.style = {
	color: "red",
}

body.appendChild(titulo);

var parrafo = document.createElement('p');
parrafo.textContent = "Esto es un documento"
body.appendChild(parrafo);

var array = ['Dea', 'Cindy', 'Ari', 'Pau', 'Sofi', 'Chiara', 'Rosangela', 'Yami', 'Den', 'Michelle'];
var lista = document.createElement('ul')

	for (var i = 0; i < array.length; i++) {
		var elementolista = document.createElement('li')
		elementolista.textContent = array[i]
		lista.appendChild(elementolista);
}

body.appendChild(lista)


function saludo() {
	console.log('hola juani');


var A = document.getElementById("Bicho")
console.log(A)
console.log(A.value)

	if (A.value == 23) {
		console.log('juani')
		}
	
	else {
		console.log('No es Juani')
	}
}

function limpiar() {
	var A = document.getElementById("Bicho")
	A.value = " "
}
*/

var firsttnumber = ""
var subtotal = 0
var secondnomber = ""
var lastop = ""

function gn (number){
	if (lastop == "")
	firstnumber = firstnumber + number
} else {
	secondnomber = secondnomber + number
}

function suma (){
	if (lastop == ""){
		lastop = "sum"
	} else {
		firstnumber 
	}
}

function resta (){

}

function multiplicar (){

}

function dividir (){ 

}


