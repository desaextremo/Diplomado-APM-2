/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/

// Creación del Callback
/*
function usarUnCallback(miCallback){
	miCallback();
}
*/
// uso del callback
/*
usarUnCallback(function(){
	alert("Creando el primer Callback en JS");
});
*/
// Callback con un parametro
/*
function otroCallback(miOtroCallback){
	miOtroCallback('Un argumento para esta función');
}
*/

// Uso del otro Callback
/*
otroCallback(function(unParametro){
	alert('Lo que recibo como parametro es: ' + unParametro);
});
*/

// Multiples callbacks llamados en determinados casos
/*
function multiplesCallbacks(callback1, callback2, callback3){

	callback1('Primer paso');

	callback2('Segundo paso');

	callback3('Ultimo paso');
}
*/
// Uso de los multiples Callbacks

/*
multiplesCallbacks(
	function(paso1){
		alert("El callback1 me envia por parametro el: " + paso1);
	},

	function(paso2){
		alert("El callback2 me envia por parametro el: " + paso2);
	},

	function(paso3){
		alert("El callback3 me envia por parametro el: " + paso3);
	}
);
*/

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/


// Callback con un parametro
function sumaCallback(miOtroCallback){
	miOtroCallback(5,4);
}

// Uso del otro Callback
sumaCallback(function(a,b){
	alert("la suma de " + a + " y " + b + " es: " + (a+b));
});

// Callback con un parametro
function restaCallback(miOtroCallback){
	miOtroCallback(5,4);
}

// Uso del otro Callback
restaCallback(function(a,b){
	alert("la resta de " + a + " y " + b + " es: " + (a-b));
});



function randomGenerator(min, max, callback)
{
   var myNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   setTimeout(function() { callback(myNumber); }, 500);
}

randomGenerator(1,500,function(numero)
{
	alert("el numero es : " + numero);
});