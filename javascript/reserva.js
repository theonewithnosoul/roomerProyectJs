/** Reserva según hospedaje seleccionado */

/*Comprobar si hay algo en el Storage*/
getHospedajeSessionStorage();

/**Funcion para obtener objeto del storage */
function getHospedajeSessionStorage() {
	const hospedajeEnSessionStorage = sessionStorage.getItem('hospedaje');
	if (hospedajeEnSessionStorage) {
		const objetosEnElSessionStorage = JSON.parse(hospedajeEnSessionStorage);

		return objetosEnElSessionStorage;
	}
}

var hospedajeBla = getHospedajeSessionStorage();


/** Obtener fecha el sessionStorage */
function getDate() {
	const dateInStorage = sessionStorage.getItem('fecha');
	if (dateInStorage) {
		const dateOutOfStorage = JSON.parse(dateInStorage);
		return dateOutOfStorage;
	}
}

var entranceDate = getDate();
console.log(entranceDate);


/**Función para sumar importe total */
let precioHabitacion = hospedajeBla.precio;
let precioDeposito = hospedajeBla.precio;
let importeTotal;

function Total() {
	let importeTotal = precioHabitacion + precioDeposito;
	return importeTotal;
}
Total();
console.log(Total());


/**Función para crear el hospedaje en reserva Jquery */
function crearHospedajeEnReserva(hospedajeBla, entranceDate) {
	$('#datosDeReserva').append(`
     <div class="subtitulo-reserva">
 		<h2>Datos de la reserva</h2>
     </div>
     <div  class="texto-imagen__reserva">
 	    <div>
 		<h4 class= "titulo-hospedaje">${hospedajeBla.titulo}</h4>
 		 <h5 class= "ubicacion mt-4">${hospedajeBla.ubicacion}</h5>
 	    </div>
 	    <div>
 		     <img class="imagen-reserva" src="${hospedajeBla.imagenHabitacion} " alt="bedroom">
 	    </div> 
     </div>
         <hr>
     <div class="row texto-reserva">
 	    <div>
 		     <h5>Fecha de ingreso: </h5>
 	    </div>
 	    <div>
 		    <h5>${entranceDate} </h5>
 	    </div> 
     </div>
         <hr>
     <div class="row texto-reserva">
     	<h4 class= "resumen"> Resumen de la reserva</h4>
     </div>
     <div class="row texto-reserva">
 	    <div>
 		    <p>Precio mensual:
 			    <br>
 			    servicios incluidos
 		    </p>
 	    </div>
 	    <div>
 	    	<p> ${hospedajeBla.precio} €</p>
 	    </div>
     </div>
    
     <div class="row texto-reserva">
         <div>
             <p>Depósito </p>
         </div>
         <div>
 	    	<p> ${hospedajeBla.precio} €</p>
 	    </div>
     </div>
     <div class="row texto-reserva">
         <div>
             <p>Importe total</p>
         </div>
         <div>
         <p> ${Total()} €</p>
     </div>
     </div>
    
     <hr>
     <div class="row texto-reserva">
         <div>
             <p>Total a pagar <br>
           Pago a través de roomer</p>
         </div>
         <div>
             <p> ${Total()} €</p>
         </div>
     </div>
     </div>
     <div class="row boton-continuar">
     <button type="button" class="btn btn-primary" data-toggle="modal"
         data-target="#modalReserva">Continuar</button>
     `);
}
crearHospedajeEnReserva(hospedajeBla, entranceDate);

/**Obtener datos personales del modal de reserva */
const botonData = $('#botonData');

botonData.click(function () {
	var nombre = $('#name').val();
	var email = $('#email').val();
	var datos = {
		nombre: nombre,
		email: email,
	};

	var datosJSON = JSON.stringify(datos);
	sessionStorage.setItem('data', datosJSON);
	console.log(datos);
	return datos;
});

