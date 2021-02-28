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
  console.log('#personalData');
}

emptyReservation(personalData);
/**Buscador */

var searchButton = $('#search-button');
var searchInput = $('#search-input');
searchButton.click(function () {
  var inputValue = searchInput.value;
  $.get('https://www.boredapi.com/api/activity', function buscar(data, status) {
    console.log(data);
    return data;
  });
});
/**Agregar Api */

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "264a91e5c7mshf3f35ab357b7eb7p12debajsn49617797b409",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
  }
};
$.ajax(settings).done(function (response) {
  console.log(response);
});