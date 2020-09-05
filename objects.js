// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);

// -------------------------------------------------------------------

// Reto: hacer un loop en donde se puedan agregar nuevos autos a la función constructora y que estos se construyan de forma más automática

<//Función constructora:

function  auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}


//new genera una instancia, una instacia es generar un objeto que proviene de un objeto:
var numero = prompt("How many cars?")
var autos = []; //array
for(var i = 0; i < numero; i++){

  var marca = prompt("brand?");
  var modelo = prompt("model?");
  var annio = prompt("year?");
  autos.push(new auto(marca, modelo, annio));
}

for(var i = 0; i < autos.length; i++) {
  console.log(autos[i])
}
