"use strict";

//Contenedor Cards
var contenedorCards = document.getElementById('contenedorCardPadre'); //event en select + filtro

var select = document.getElementById('inputGroupUbicacion');
var botonBuscar = document.getElementById('botonBusquedaHome');
botonBuscar.addEventListener('click', function () {
  var eleccion = select.value;

  if (eleccion === '0') {
    mostrar(Hospedajes.filter(function (el) {
      return el.ubicacion == 'Barcelona';
    }));
  } else if (eleccion === '1') {
    mostrar(Hospedajes.filter(function (el) {
      return el.ubicacion == 'Madrid';
    }));
  } else if (eleccion === '2') {
    mostrar(Hospedajes.filter(function (el) {
      return el.ubicacion == 'Berlín';
    }));
  }

  $('html, body').animate({
    scrollTop: $('#scroll').offset().top
  }, 2000);
});
var deleted = []; //funcion para mostrar hospedajes por ubicación

function mostrar(Hospedajes) {
  contenedorCards.innerHTML = '';
  Hospedajes.forEach(function (hospedaje) {
    var div = document.createElement('div');
    div.classList.add('col-sm-3', 'mt-3');
    div.innerHTML += "\n            <div id=\"scroll\" class=\"card card-shadow\">     \n            <img class=\"d-block w-100 carousel-imagen\" src=".concat(hospedaje.imagenHabitacion, " >                \n            <div id=\"agregado\" class=\"card-body\">\n                <h5 class=\"card-title\"> ").concat(hospedaje.titulo, "</h5>\n                <h5 class=\"ubicacion\"> ").concat(hospedaje.ubicacion, "</h5> \n                <p class=\"card-text\">  Habitaci\xF3n  ").concat(hospedaje.habitacion, "</p> \n                <h5>").concat(hospedaje.precio, " \u20AC </h5>\n\t\t\n\t\t\t\t<p class=\"oculto\" id=\"agregadoA").concat(hospedaje.id, "\">agregado</p>\n\t\t\t\t<button id=\"botonFav").concat(hospedaje.id, "\" type=\"button\" class=\"btn btn-outline-danger  heart-button\"><svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n\t\t\t\t<path d=\"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n\t\t\t  </svg></button>\n\t\t\t  \n                <button type=\"button\" id=\"boton-ver-mas").concat(hospedaje.id, "\"\n                    class=\"btn btn-outline-success btn-primary boton-modal  texto-color\"\n                    data-toggle=\"modal\" data-target=\"#my-modal\">Ver m\xE1s</button>\n\n            </div> \n    \t</div>\n\t\t");
    contenedorCards.appendChild(div);
    /** evento para agregar a favoritos */

    var agregarFav = document.getElementById("botonFav".concat(hospedaje.id));
    agregarFav.addEventListener('click', function (e) {
      $('#cartelVacio').hide();
      agregarAFavs(hospedaje.id);
      $("#agregadoA".concat(hospedaje.id)).toggle();
      e.preventDefault();
      console.log(favoritos);
    });
    /**Boton para abrir el modal: ver más */

    var boton = document.getElementById("boton-ver-mas".concat(hospedaje.id));
    boton.addEventListener('click', function () {
      abrirModal(hospedaje.id);
    });
  });
} //Contenedor para modal


var contenedorModal = document.getElementById('contenedorModal'); // Funcion para abrir modal

var verModal = []; //Carga de hospedaje al modal

function abrirModal(id) {
  contenedorModal.innerHTML = '';
  var agregarHospedaje = Hospedajes.filter(function (el) {
    return el.id == id;
  })[0];
  verModal.push(agregarHospedaje);
  var divModal = document.createElement('div');
  divModal.classList.add('modal-content', 'alineacion-modal', 'modal-body');
  divModal.innerHTML += "\n\t<h2>".concat(agregarHospedaje.titulo, "</h2>\n\t<div id=\"carouselExampleIndicators-modal-1\"\n\t\tclass=\"carousel slide carousel-size carousel-size__modal\">\n\t\t<ol class=\"carousel-indicators\">\n\t\t\t<li data-target=\"#carouselExampleIndicators-modal-1\" data-slide-to=\"0\"\n\t\t\t\tclass=\"active\"></li>\n\t\t\t<li data-target=\"#carouselExampleIndicators-modal-1\" data-slide-to=\"1\"></li>\n\t\t\t<li data-target=\"#carouselExampleIndicators-modal-1\" data-slide-to=\"2\"></li>\n\t\t</ol>\n\t\t<div class=\"carousel-inner\">\n\t\t\t<div class=\"carousel-item active card \">\n\t\t\t\t<img src=\"").concat(agregarHospedaje.imagenHabitacion, "\"\n\t\t\t\t\tclass=\"d-block w-100  carousel-imagen__modal modal__img \"\n\t\t\t\t\talt=\"bedroom1\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t\t<img src=\"").concat(agregarHospedaje.imagenCocina, "\"\n\t\t\t\t\tclass=\"d-block w-100 carousel-imagen__modal modal__img \" alt=\"kitchen1\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t\t<img src=\".").concat(agregarHospedaje.imagenBanio, "\"\n\t\t\t\t\tclass=\"d-block w-100 carousel-imagen__modal modal__img\" alt=\"bathroom1\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<a class=\"carousel-control-prev carousel-control-prev__modal\"\n\t\thref=\"#carouselExampleIndicators-modal-1\" role=\"button\" data-slide=\"prev\">\n\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t<span class=\"sr-only\">Previous</span>\n\t</a>\n\t<a class=\"carousel-control-next carousel-control-next__modal\"\n\t\thref=\"#carouselExampleIndicators-modal-1\" role=\"button\" data-slide=\"next\">\n\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t<span class=\"sr-only\">Next</span>\n\t</a>\n\t<div class=\"container contenedor-modal\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">\n\n\t\t\t\t<p>").concat(agregarHospedaje.banioPrivado, "</p>\n\t\t\t\t<p>").concat(agregarHospedaje.amoblado, "</p>\n\t\t\t\t<p>Cama ").concat(agregarHospedaje.cama, "</p>\n\t\t\t\t<p>Compa\xF1ero/a de piso: ").concat(agregarHospedaje.compañero, "</p>\n\t\t\t\t<p>Ubicaci\xF3n: ").concat(agregarHospedaje.ubicacion, "</p>\n\t\t\t\t<p>Calefacci\xF3n: ").concat(agregarHospedaje.calefaccion, "</p>\n\t\t\t\t<p>Aire Acondicionado: ").concat(agregarHospedaje.aireAcondicionado, "</p>\n\t\t\t\t<p>Precio: ").concat(agregarHospedaje.precio, " \u20AC por mes </p>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<h4 class=\"titulo-modal ml-5\">Comodidades</h4>\n\t\t\t\t<ul>\n\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 1.svg\" alt=\"SVG living\">\n\t\t\t\t\t\t\t<p>Living</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div class=\"w-100\"></div>\n\t\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 3.svg\" alt=\"SVG Cama\">\n\t\t\t\t\t\t\t<p>Cama Queen</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 5.svg\" alt=\"SVG ba\xF1o\">\n\t\t\t\t\t\t\t<p>Ba\xF1o privado</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<ul>\n\t\t\t\t\t<div class=\"titulo-modal\"></div>\n\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 6.svg\" alt=\"SVG cocina\">\n\t\t\t\t\t\t<p>Cocina completa</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 7.svg\" alt=\"SVG estudio\">\n\t\t\t\t\t\t<p>Area de estudio</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 8.svg\" alt=\"SVG lavarropas\">\n\t\t\t\t\t\t<p>Lavarropas</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"boton-reservar\">\n\t\t<button type=\"button\" id=\"boton-reservar").concat(agregarHospedaje.id, "\"\n\t\t\tclass=\"btn btn-outline-success btn-primary boton-modal  texto-color \"><a\n\t\t\t\tclass=\"boton-reserva\">Reservar</a></button>\n\t</div>\n");
  contenedorModal.appendChild(divModal);
  /**Reservar */

  var botonReservar = document.getElementById("boton-reservar".concat(agregarHospedaje.id));
  botonReservar.addEventListener('click', function () {
    var hospedajeCompletoJSON = JSON.stringify(agregarHospedaje);
    sessionStorage.setItem('hospedaje', hospedajeCompletoJSON);
    abrirVentanaReserva(agregarHospedaje.id);
  });
}
/**Redirección a reserva.html */


function abrirVentanaReserva() {
  window.open('reserva.html', '_self', 'reserva');
}
/**Obtener fecha del date picker*/


var date = document.getElementById('start');
/**Guardar la fecha en el storage para enviar a reserva */

date.onchange = function () {
  var electedDate = this.value;
  var electedDateJson = JSON.stringify(electedDate);
  sessionStorage.setItem('fecha', electedDateJson);
  console.log(electedDate);
  return electedDate;
};

var getDate = date.onchange();