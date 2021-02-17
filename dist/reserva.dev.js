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
/**Función para crear el hospedaje en reserva Jquery */
// function crearHospedajeEnReserva() {
// 	$('#datosDeReserva').append(`
//     <div class="subtitulo-reserva">
// 		<h2>Datos de la reserva</h2>
//     </div>
//     <div  class="texto-imagen__reserva">
// 	    <div>
// 		<p>Habitación amueblada, luminosa en <br>
// 			departamento compartido</p>
// 		 <p>  </p>
// 	    </div>
// 	    <div>
// 		    // <img class="imagen-reserva" src=" " alt="bedroom">
// 	    </div> 
//     </div>
//         <hr>
//     <div class="row texto-reserva">
// 	    <div>
// 		    <h5>Disponible desde:</h5>
// 	    </div>
// 	    <div>
// 		    <h5>Estancia minima</h5>
// 	    </div> 
//     </div>
//         <hr>
//     <div class="row texto-reserva">
//     	<h4> Resumen de la reserva</h4>
//     </div>
//     <div class="row texto-reserva">
// 	    <div>
// 		    <p>Precio mensual:
// 			    <br>
// 			    servicios incluidos
// 		    </p>
// 	    </div>
// 	    <div>
// 	    	<p> €</p>
// 	    </div>
//     </div>
//     <div class="row texto-reserva">
//         <div>
//             <p>Duración de la estancia</p>
//         </div>
//         <div>
//             <p> meses</p>
//         </div>
//     </div>
//     <div class="row texto-reserva">
//         <div>
//             <p>Depósito</p>
//         </div>
//     </div>
//     <div class="row texto-reserva">
//         <div>
//             <p>Importe total</p>
//         </div>
//     </div>
//     <div class="row texto-reserva">
//         <div>
//             <p>Pago a través de roomer</p>
//         </div>
//         <div>
//             <p> €</p>
//         </div>
//     </div>
//     <div class="row texto-reserva">
//         <div>
//             <p>Tarifa de servicio</p>
//         </div>
//         <div>
//             <p> €</p>
//         </div>
//     </div>
//     <hr>
//     <div class="row texto-reserva">
//         <div>
//             <p>Total a pagar</p>
//         </div>
//         <div>
//             <p> €</p>
//         </div>
//     </div>
//     </div>
//     <div class="row boton-continuar">
//     <button type="button" class="btn btn-primary" data-toggle="modal"
//         data-target="#modalReserva">Continuar</button>
//     `);
// }
// crearHospedajeEnReserva();

var templateReserva = document.getElementById('datosDeReserva');

function crearHospedajeEnReserva(hospedajeBla) {
  templateReserva.innerText = '';
  var div = document.createElement('div');
  div.innerHTML += "\n\t\n    <div class=\"subtitulo-reserva\">\n\t\t<h2>Datos de la reserva</h2>\n    </div>\n    <div  class=\"texto-imagen__reserva\">\n\t    <div>\n\t\t<p>Habitaci\xF3n amueblada, luminosa en <br>\n\t\t\tdepartamento compartido</p>\n\t\t <p> ".concat(hospedajeBla.ubicacion, " </p>\n\t    </div>\n\t    <div>\n\t\t    // <img class=\"imagen-reserva\" src=\" \" alt=\"bedroom\">\n\t    </div> \n    </div>\n        <hr>\n    <div class=\"row texto-reserva\">\n\t    <div>\n\t\t    <h5>Disponible desde:</h5>\n\t    </div>\n\t    <div>\n\t\t    <h5>Estancia minima</h5>\n\t    </div> \n    </div>\n        <hr>\n    <div class=\"row texto-reserva\">\n    \t<h4> Resumen de la reserva</h4>\n    </div>\n    <div class=\"row texto-reserva\">\n\t    <div>\n\t\t    <p>Precio mensual:\n\t\t\t    <br>\n\t\t\t    servicios incluidos\n\t\t    </p>\n\t    </div>\n\t    <div>\n\t    \t<p> \u20AC</p>\n\t    </div>\n    </div>\n    <div class=\"row texto-reserva\">\n        <div>\n            <p>Duraci\xF3n de la estancia</p>\n        </div>\n        <div>\n            <p> meses</p>\n        </div>\n    </div>\n    <div class=\"row texto-reserva\">\n        <div>\n            <p>Dep\xF3sito</p>\n        </div>\n    </div>\n    <div class=\"row texto-reserva\">\n        <div>\n            <p>Importe total</p>\n        </div>\n    </div>\n    <div class=\"row texto-reserva\">\n        <div>\n            <p>Pago a trav\xE9s de roomer</p>\n        </div>\n        <div>\n            <p> \u20AC</p>\n        </div>\n    </div>\n    <div class=\"row texto-reserva\">\n        <div>\n            <p>Tarifa de servicio</p>\n        </div>\n\n        <div>\n            <p> \u20AC</p>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row texto-reserva\">\n        <div>\n            <p>Total a pagar</p>\n        </div>\n        <div>\n            <p> \u20AC</p>\n        </div>\n    </div>\n    </div>\n    <div class=\"row boton-continuar\">\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n        data-target=\"#modalReserva\">Continuar</button>\n    ");
  templateReserva.appendChild(div);
}

crearHospedajeEnReserva();