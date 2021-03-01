"use strict";

/**Carrito de hospedajes Favoritos */
var favoritos = [];
/**Contenedores del carrito */

var contenedorFavoritos = $('#favoritosAqui');
var carritoFavoritos = '#favoritosEnModal';
var favoritosEnCarrito = '#favoritosEnCarrito';
/**Función para cargar en el carrito */

function agregarAFavs(id) {
  var agregarHospedajeAfav = Hospedajes.filter(function (el) {
    return el.id == id;
  })[0];
  var listaFav = favoritos.findIndex(function (e) {
    return e.id == agregarHospedajeAfav.id;
  });

  if (listaFav > -1) {
    favoritos.splice(listaFav, 1);
  } else {
    favoritos.push(agregarHospedajeAfav);
  }

  contenedorFavoritos.append("\n    <div class=\" mb-3\" style=\"width: 35rem;\">\n        <div class=\"container fade-out\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <img class=\"d-block imagen-fav\" src=".concat(agregarHospedajeAfav.imagenHabitacion, ">\n                    </div>\n                    <div class=\"col\">\n                        <h5 class=\"card-title\">").concat(agregarHospedajeAfav.titulo, "</h5>\n                        <h6 class=\"card-subtitle mb-2 ubicacion\">").concat(agregarHospedajeAfav.ubicacion, "</h6>\n                        <h5 class=\"card-text\">Habitaci\xF3n ").concat(agregarHospedajeAfav.habitacion, "</h5>\n                        <h5 class=\"card-text\">Cama ").concat(agregarHospedajeAfav.cama, "</h5>\n                        <h5 class=\"card-text\">Precio por mes ").concat(agregarHospedajeAfav.precio, "\u20AC </h5>\n                        \n                    </div>\n                   \n                </div>\n                <button id=\"eliminar").concat(agregarHospedajeAfav.id, "\" class=\"btn btn-eliminar btn-outline-success\">eliminar</button>\n                \n            </div>\n        </div>\n    </div>\n        "));
  /**Eliminar hospedaje de fav */

  var botonEliminar = document.getElementById("eliminar".concat(agregarHospedajeAfav.id));
  botonEliminar.addEventListener('click', function () {
    botonEliminar.parentElement.remove();
    favoritos = favoritos.filter(function (el) {
      return el.id != agregarHospedajeAfav.id;
    });

    if (favoritos.length === 0) {
      contenedorFavoritos.innerHTML = '';
      $('#cartelVacio').show();
    }
  });
}