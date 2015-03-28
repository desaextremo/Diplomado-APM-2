var my_object = new Object();
var other_object = {} ;

my_object =  {
	firstName: 'Crhistian',
	lastName:'Ovalle',
	phone: 5654654
} ;

for(key in my_object){
	console.log("Datos objeto : " + my_object[key]);
}

// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();