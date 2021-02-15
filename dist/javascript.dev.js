"use strict";

/**Hospedajes.html */
//Contenedor Cards
var contenedorCards = document.getElementById('contenedorCardPadre'); //Funcion para mostrar mapa de la ciudad correspondiente

var mapaBarcelona = document.getElementById('mapaBarcelona');
var mapaMadrid = document.getElementById('mapaMadrid'); //event en select + filtro

var select = document.getElementById('inputGroupUbicacion'); // select.addEventListener('change', () => {
// 	let eleccion = select.value;
// 	if (eleccion === '0') {
// 		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Barcelona'));
// 		mapaBarcelona.innerHTML = '';
// 		let divMapaB = document.createElement('div');
// 		divMapaB.classList.add('col');
// 		divMapaB.innerHTML += `
// 		<iframe class="mapa"
// 		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40275.757954828165!2d2.1430467032310685!3d41.38465085872697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1603490507379!5m2!1ses-419!2sar"
// 		width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
// 		tabindex="0"></iframe>`;
// 		mapaBarcelona.appendChild(divMapaB);
// 	} else if (eleccion === '1') {
// 		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Madrid'));
// 		mapaMadrid.innerHTML = '';
// 		let divMapaA = document.createElement('div');
// 		divMapaA.classList.add('col');
// 		divMapaA.innerHTML += `
// 		<iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48601.73362672446!2d-3.731045456806114!3d40.41752625499234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zTWFkcmlkLCBFc3Bhw7Fh!5e0!3m2!1ses-419!2sar!4v1612917032884!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
// 		mapaMadrid.appendChild(divMapaA);
// 	} else {
// 		console.log('ciudad no disponible');
// 	}
// 	localStorage.pais = eleccion;
// });

mostrar(Hospedajes); //funcion para mostrar hospedajes por ubicación

function mostrar(Hospedajes) {
  contenedorCards.innerHTML = '';
  Hospedajes.forEach(function (hospedaje) {
    var div = document.createElement('div');
    div.classList.add('col-sm-6');
    div.innerHTML += "\n\n            <div class=\"card\">     \n            <img class=\"d-block w-100 carousel-imagen\" src=".concat(hospedaje.imagenHabitacion, " >                \n            <div class=\"card-body\">\n                <h5 class=\"card-title\"> ").concat(hospedaje.titulo, "</h5>\n                <p class=\"card-text\"> ").concat(hospedaje.ubicacion, " <br>\n                  Habitaci\xF3n  ").concat(hospedaje.habitacion, " <br>\n                <p>").concat(hospedaje.precio, " \u20AC </p>\n                </p>\n                <button type=\"button\" id=\"boton-ver-mas").concat(hospedaje.id, "\"\n                    class=\"btn btn-outline-success btn-primary boton-modal  texto-color\"\n                    data-toggle=\"modal\" data-target=\"#my-modal\">Ver m\xE1s</button>\n\n            </div> \n    \t</div>\n\t\t");
    contenedorCards.appendChild(div);
    var boton = document.getElementById("boton-ver-mas".concat(hospedaje.id));
    boton.addEventListener('click', function () {
      var hospedajeJSON = JSON.stringify(hospedaje);
      localStorage.setItem = hospedajeJSON;
      abrirModal(hospedaje.id);
    });
  });
} //Const para modal


var contenedorModal = document.getElementById('contenedorModal'); // Funcion para abrir modal

var verModal = [];

function abrirModal(id) {
  contenedorModal.innerHTML = '';
  var agregarHospedaje = Hospedajes.filter(function (el) {
    return el.id == id;
  })[0];
  verModal.push(agregarHospedaje);
  var divModal = document.createElement('div');
  divModal.classList.add('modal-content', 'alineacion-modal', 'modal-body');
  divModal.innerHTML += "\n\t<h2>".concat(agregarHospedaje.titulo, "</h2>\n\t<div id=\"carouselExampleIndicators-modal-1\"\n\t\tclass=\"carousel slide carousel-size carousel-size__modal\">\n\t\t<ol class=\"carousel-indicators\">\n\t\t\t<li data-target=\"#carouselExampleIndicators-modal-1\" data-slide-to=\"0\"\n\t\t\t\tclass=\"active\"></li>\n\t\t\t<li data-target=\"#carouselExampleIndicators-modal-1\" data-slide-to=\"1\"></li>\n\t\t\t<li data-target=\"#carouselExampleIndicators-modal-1\" data-slide-to=\"2\"></li>\n\t\t</ol>\n\t\t<div class=\"carousel-inner\">\n\t\t\t<div class=\"carousel-item active card \">\n\t\t\t\t<img src=\"").concat(agregarHospedaje.imagenHabitacion, "\"\n\t\t\t\t\tclass=\"d-block w-100  carousel-imagen__modal modal__img \"\n\t\t\t\t\talt=\"bedroom1\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t\t<img src=\"").concat(agregarHospedaje.imagenCocina, "\"\n\t\t\t\t\tclass=\"d-block w-100 carousel-imagen__modal modal__img \" alt=\"kitchen1\">\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t\t<img src=\".").concat(agregarHospedaje.imagenBanio, "\"\n\t\t\t\t\tclass=\"d-block w-100 carousel-imagen__modal modal__img\" alt=\"bathroom1\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<a class=\"carousel-control-prev carousel-control-prev__modal\"\n\t\thref=\"#carouselExampleIndicators-modal-1\" role=\"button\" data-slide=\"prev\">\n\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t<span class=\"sr-only\">Previous</span>\n\t</a>\n\t<a class=\"carousel-control-next carousel-control-next__modal\"\n\t\thref=\"#carouselExampleIndicators-modal-1\" role=\"button\" data-slide=\"next\">\n\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t<span class=\"sr-only\">Next</span>\n\t</a>\n\t<div class=\"container contenedor-modal\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">\n\n\t\t\t\t<p>").concat(agregarHospedaje.banioPrivado, "</p>\n\t\t\t\t<p>").concat(agregarHospedaje.amoblado, "</p>\n\t\t\t\t<p>Cama ").concat(agregarHospedaje.cama, "</p>\n\t\t\t\t<p>Compa\xF1ero/a de piso: ").concat(agregarHospedaje.compañero, "</p>\n\t\t\t\t<p>Ubicaci\xF3n: ").concat(agregarHospedaje.ubicacion, "</p>\n\t\t\t\t<p>Calefacci\xF3n: ").concat(agregarHospedaje.calefaccion, "</p>\n\t\t\t\t<p>Aire Acondicionado: ").concat(agregarHospedaje.aireAcondicionado, "</p>\n\t\t\t\t<p>Precio: ").concat(agregarHospedaje.precio, " \u20AC por mes </p>\n\t\t\t\t<p>Disponibilidad desde el <br> ").concat(agregarHospedaje.disponibilidad, "</p>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<h4 class=\"titulo-modal\">Comodidades</h4>\n\t\t\t\t<ul>\n\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 1.svg\" alt=\"SVG living\">\n\t\t\t\t\t\t\t<p>Living</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div class=\"w-100\"></div>\n\t\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 3.svg\" alt=\"SVG Cama\">\n\t\t\t\t\t\t\t<p>Cama Queen</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 5.svg\" alt=\"SVG ba\xF1o\">\n\t\t\t\t\t\t\t<p>Ba\xF1o privado</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<ul>\n\t\t\t\t\t<div class=\"titulo-modal\"></div>\n\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 6.svg\" alt=\"SVG cocina\">\n\t\t\t\t\t\t<p>Cocina completa</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 7.svg\" alt=\"SVG estudio\">\n\t\t\t\t\t\t<p>Area de estudio</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"comodidades-icons\"><img class=\"svg-size\"\n\t\t\t\t\t\t\tsrc=\"./SVG/Recurso 8.svg\" alt=\"SVG lavarropas\">\n\t\t\t\t\t\t<p>Lavarropas</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"boton-reservar\">\n\t\t<button type=\"button\" id=\"boton-reservar\"\n\t\t\tclass=\"btn btn-outline-success btn-primary boton-modal  texto-color \"><a\n\t\t\t\tclass=\"boton-reserva\">Reservar</a></button>\n\t</div>\n");
  contenedorModal.appendChild(divModal);
  var botonReservar = document.getElementById("boton-reservar");
  botonReservar.addEventListener('click', function () {
    abrirVentanaReserva();
  });
} // agregarHospedaje.id ${agregarHospedaje.id}


function abrirVentanaReserva() {
  window.open('reserva.html', '_self', "reserva");
}

;
/**FIN Hospedajes.html */