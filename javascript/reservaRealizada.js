/*Comprobar si hay algo en el Storage*/
getData();

/**Funcion para obtener datos personales del storage */
function getData() {
	const dataInStorage = sessionStorage.getItem('data');
	if (dataInStorage) {
		const dataOutOfStorage = JSON.parse(dataInStorage);
		return dataOutOfStorage;
	}
}

var personalData = getData();

/**Cargar datos de reserva */
function emptyReservation(personalData) {
	$('#personalData').append(`
     <main class="container">
        <div id="contenedorDivReserva">
            <div class="col-lg-9 contenedor-reserva">
                <div >
                    <h2 class=" mt-4">Tu reserva fue realizada con éxito!</h2>
                    <h3 class= "titulo-hospedaje mt-4">${personalData.nombre} te vas a ${hospedajeBla.ubicacion}</h3>
                    <img class="imagen-reservada mt-4" src="${hospedajeBla.imagenHabitacion} " alt="bedroom">
                    <h5 class=" mt-4">Te enviamos la confirmación a este e-mail: ${personalData.email}</h5>
                </div>
             </div>
        </div>
     </main> 
        `);
	
}
emptyReservation(personalData);
