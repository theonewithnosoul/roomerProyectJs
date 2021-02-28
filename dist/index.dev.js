"use strict";

/**HOME */
// Boton busqueda home
var botonBusquedaHome = document.getElementById('botonBusquedaHome');
botonBusquedaHome.addEventListener('click', function (event) {
  event.preventDefault();
  abrirVentanaBusqueda();
});

function abrirVentanaBusqueda() {
  window.open('hospedajes.html', '_self', 'Hospedajes');
}

var selectorUbicacion = document.getElementById('inputGroupUbicacion03');
console.log(selectorUbicacion);
selectorUbicacion.addEventListener('change', function () {
  var seleccion = selectorUbicacion.value;

  if (seleccion == '0') {
    var barcelonaJSON = JSON.stringify(seleccion);
    sessionStorage.setItem = barcelonaJSON;
  } else if (seleccion == '1') {
    var madridJSON = JSON.stringify(seleccion);
    sessionStorage.setItem = madridJSON;
  } else if (seleccion == '2') {
    var berlinJSON = JSON.stringify(seleccion);
    sessionStorage.setItem = berlinJSON;
  } else console.log("ciudad inexistente");
});