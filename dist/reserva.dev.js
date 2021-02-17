"use strict";

/** Reserva según hospedaje seleccionado */

/*Comprobar si hay algo en el Storage*/
getHospedajeSessionStorage();
/**Funcion para obtener objeto del storage */

function getHospedajeSessionStorage() {
  var hospedajeEnSessionStorage = sessionStorage.getItem('hospedaje');

  if (hospedajeEnSessionStorage) {
    var objetosEnElSessionStorage = JSON.parse(hospedajeEnSessionStorage); // reserva.push(objetosEnElSessionStorage);

    return objetosEnElSessionStorage;
  }
}

var hospedajeBla = getHospedajeSessionStorage();
console.log(hospedajeBla);
/**Función para sumar importe total */

var precioHabitacion = hospedajeBla.precio;
var precioDeposito = hospedajeBla.precio;
var importeTotal;

function Total() {
  var importeTotal = precioHabitacion + precioDeposito;
  return importeTotal;
}

Total();
console.log(Total());
/**Función para crear el hospedaje en reserva Jquery */

function crearHospedajeEnReserva(hospedajeBla) {
  $('#datosDeReserva').append("\n     <div class=\"subtitulo-reserva\">\n \t\t<h2>Datos de la reserva</h2>\n     </div>\n     <div  class=\"texto-imagen__reserva\">\n \t    <div>\n \t\t<p>Habitaci\xF3n amueblada, luminosa en <br>\n \t\t\tdepartamento compartido</p>\n \t\t <p>".concat(hospedajeBla.ubicacion, "  </p>\n \t    </div>\n \t    <div>\n \t\t     <img class=\"imagen-reserva\" src=\"").concat(hospedajeBla.imagenHabitacion, " \" alt=\"bedroom\">\n \t    </div> \n     </div>\n         <hr>\n     <div class=\"row texto-reserva\">\n \t    <div>\n \t\t    <h5>Disponible desde:</h5>\n \t    </div>\n \t    <div>\n \t\t    <h5>Estancia minima</h5>\n \t    </div> \n     </div>\n         <hr>\n     <div class=\"row texto-reserva\">\n     \t<h4> Resumen de la reserva</h4>\n     </div>\n     <div class=\"row texto-reserva\">\n \t    <div>\n \t\t    <p>Precio mensual:\n \t\t\t    <br>\n \t\t\t    servicios incluidos\n \t\t    </p>\n \t    </div>\n \t    <div>\n \t    \t<p> ").concat(hospedajeBla.precio, " \u20AC</p>\n \t    </div>\n     </div>\n    \n     <div class=\"row texto-reserva\">\n         <div>\n             <p>Dep\xF3sito </p>\n         </div>\n         <div>\n \t    \t<p> ").concat(hospedajeBla.precio, " \u20AC</p>\n \t    </div>\n     </div>\n      <div class=\"row texto-reserva\">\n         <div>\n             <p>Duraci\xF3n de la estancia</p>\n         </div>\n         <div>\n             <p> 3 meses</p>\n         </div>\n     </div>\n     <div class=\"row texto-reserva\">\n         <div>\n             <p>Importe total</p>\n         </div>\n         <div>\n         <p> ").concat(Total(), " \u20AC</p>\n     </div>\n     </div>\n    \n     <hr>\n     <div class=\"row texto-reserva\">\n         <div>\n             <p>Total a pagar <br>\n           Pago a trav\xE9s de roomer</p>\n         </div>\n         <div>\n             <p> ").concat(Total(), " \u20AC</p>\n         </div>\n     </div>\n     </div>\n     <div class=\"row boton-continuar\">\n     <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n         data-target=\"#modalReserva\">Continuar</button>\n     "));
}

crearHospedajeEnReserva(hospedajeBla);