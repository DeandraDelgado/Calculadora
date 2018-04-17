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

var primerNumero = ''
var segundoNumero = ''
var ultimoOperador = ''
var subtotal = 0
var display = getElementById("resultado")

function numero(numero) {
    if (ultimoOperador== '') {
        primerNumero = primerNumero + numero
        console.log(primerNumero)
        display.value = primernumber

    }
        else {
        segundoNumero = segundoNumero + numero
        console.log(segundoNumero)
        display.value = segundoNumero
    }
}

function suma () {
    if (ultimoOperador== '') {
        ultimoOperador = '+'
    } else {
        calculo()
    }
}

function resta () {
    if (ultimoOperador== '') {
        ultimoOperador = '-'
    } else {
        calculo()
    }
}

function multiplicacion () {
    if (ultimoOperador== '') {
        ultimoOperador = '*'
    } else {
        calculo()
    }
}

function division () {
    if (ultimoOperador== '') {
        ultimoOperador = '/'
    } else {
        calculo()
    }
}

function resultado(){
    var resultado = document.getElementById('resultado')
    calculo()
    resultado.value = primerNumero
    display.value = primerNumero
}

function calculo () {
    switch (ultimoOperador){
        case '+':
            primerNumero = parseInt(primerNumero) + parseInt(segundoNumero)
            ultimoOperador = ''
            segundoNumero = ''
            break
    }
    switch (ultimoOperador){
        case '-':
            primerNumero = parseInt(primerNumero) - parseInt(segundoNumero)
            ultimoOperador = ''
            segundoNumero = ''
            break
    }
    switch (ultimoOperador){
        case '*':
            primerNumero = parseInt(primerNumero) * parseInt(segundoNumero)
            ultimoOperador = ''
            segundoNumero = ''
            break
    }
    switch (ultimoOperador){
        case '/':
            primerNumero = parseInt(primerNumero) / parseInt(segundoNumero)
            ultimoOperador = ''
            segundoNumero = ''
            break
    }
}

function AC() {
	document.getElementById('resultado').value = "";
}