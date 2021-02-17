/** Reserva según hospedaje seleccionado */

/*Comprobar si hay algo en el Storage*/
getHospedajeSessionStorage();

/**Funcion para obtener objeto del storage */
function getHospedajeSessionStorage() {
	const hospedajeEnSessionStorage = sessionStorage.getItem('hospedaje');
	if (hospedajeEnSessionStorage) {
		const objetosEnElSessionStorage = JSON.parse(hospedajeEnSessionStorage);

		// reserva.push(objetosEnElSessionStorage);
		return objetosEnElSessionStorage;
	}
}


var hospedajeBla = getHospedajeSessionStorage();
console.log(hospedajeBla);


/**Obtener fecha del date picker*/
 let date = document.getElementById('start')

 date.onchange = function(){
     let electedDate = this.value
     console.log (electedDate)
    return electedDate
 }

let getDate = date.onchange()


/**Función para sumar importe total */

let precioHabitacion = hospedajeBla.precio;
let precioDeposito = hospedajeBla.precio;

let importeTotal;

function Total() {
	let importeTotal = precioHabitacion + precioDeposito;
	return importeTotal;
}
Total()
console.log (Total())



/**Función para crear el hospedaje en reserva Jquery */

function crearHospedajeEnReserva(hospedajeBla, electedDate) {
	$('#datosDeReserva').append(`
     <div class="subtitulo-reserva">
 		<h2>Datos de la reserva</h2>
     </div>
     <div  class="texto-imagen__reserva">
 	    <div>
 		<p>Habitación amueblada, luminosa en <br>
 			departamento compartido</p>
 		 <p>${hospedajeBla.ubicacion}  </p>
 	    </div>
 	    <div>
 		     <img class="imagen-reserva" src="${hospedajeBla.imagenHabitacion} " alt="bedroom">
 	    </div> 
     </div>
         <hr>
     <div class="row texto-reserva">
 	    <div>
 		    <h5>Fecha de ingreso ${getDate}</h5>
 	    </div>
 	    <div>
 		    <h5>Estancia minima</h5>
 	    </div> 
     </div>
         <hr>
     <div class="row texto-reserva">
     	<h4> Resumen de la reserva</h4>
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
             <p>Duración de la estancia</p>
         </div>
         <div>
             <p> 3 meses</p>
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
crearHospedajeEnReserva(hospedajeBla, getDate);


