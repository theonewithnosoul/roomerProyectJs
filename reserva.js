

/** Reserva según hospedaje seleccionado */

/*Comprobar si hay algo en el Storage*/
getHospedajeSessionStorage();


/**Funcion para obtener objeto del storage */
function getHospedajeSessionStorage() {
	
	const hospedajeEnSessionStorage = sessionStorage.getItem('hospedaje');
	if (hospedajeEnSessionStorage) {
		
		const objetosEnElSessionStorage = JSON.parse(hospedajeEnSessionStorage);
        
        // reserva.push(objetosEnElSessionStorage);
	    return objetosEnElSessionStorage
	}
     
}




var hospedajeBla = getHospedajeSessionStorage();
console.log (hospedajeBla)

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
     let div = document.createElement('div');
	 div.innerHTML += `
	
    <div class="subtitulo-reserva">
		<h2>Datos de la reserva</h2>
    </div>
    <div  class="texto-imagen__reserva">
	    <div>
		<p>Habitación amueblada, luminosa en <br>
			departamento compartido</p>
		 <p> ${hospedajeBla.ubicacion} </p>
	    </div>
	    <div>
		    // <img class="imagen-reserva" src=" " alt="bedroom">
	    </div> 
    </div>
        <hr>
    <div class="row texto-reserva">
	    <div>
		    <h5>Disponible desde:</h5>
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
	    	<p> €</p>
	    </div>
    </div>
    <div class="row texto-reserva">
        <div>
            <p>Duración de la estancia</p>
        </div>
        <div>
            <p> meses</p>
        </div>
    </div>
    <div class="row texto-reserva">
        <div>
            <p>Depósito</p>
        </div>
    </div>
    <div class="row texto-reserva">
        <div>
            <p>Importe total</p>
        </div>
    </div>
    <div class="row texto-reserva">
        <div>
            <p>Pago a través de roomer</p>
        </div>
        <div>
            <p> €</p>
        </div>
    </div>
    <div class="row texto-reserva">
        <div>
            <p>Tarifa de servicio</p>
        </div>

        <div>
            <p> €</p>
        </div>
    </div>
    <hr>
    <div class="row texto-reserva">
        <div>
            <p>Total a pagar</p>
        </div>
        <div>
            <p> €</p>
        </div>
    </div>
    </div>
    <div class="row boton-continuar">
    <button type="button" class="btn btn-primary" data-toggle="modal"
        data-target="#modalReserva">Continuar</button>
    `;
    templateReserva.appendChild(div)
    
}
crearHospedajeEnReserva();
