"use strict";

/*Comprobar si hay algo en el Storage*/
getData();
/**Funcion para obtener datos personales del storage */

function getData() {
  var dataInStorage = sessionStorage.getItem('data');

  if (dataInStorage) {
    var dataOutOfStorage = JSON.parse(dataInStorage);
    return dataOutOfStorage;
  }
}

var personalData = getData();
/**Cargar datos de reserva */

function emptyReservation(personalData) {
  $('#personalData').append("\n     <main class=\"container\">\n        <div id=\"contenedorDivReserva\">\n            <div class=\"col-lg-9 contenedor-reserva\">\n                <div >\n                    <h2 class=\" mt-4\">Tu reserva fue realizada con \xE9xito!</h2>\n                    <h3 class= \"titulo-hospedaje mt-4\">".concat(personalData.nombre, " te vas a ").concat(hospedajeBla.ubicacion, "</h3>\n                    <img class=\"imagen-reservada mt-4\" src=\"").concat(hospedajeBla.imagenHabitacion, " \" alt=\"bedroom\">\n                    <h5 class=\" mt-4\">Te enviamos la confirmaci\xF3n a este e-mail: ").concat(personalData.email, "</h5>\n                </div>\n             </div>\n        </div>\n     </main> \n        "));
}

emptyReservation(personalData);