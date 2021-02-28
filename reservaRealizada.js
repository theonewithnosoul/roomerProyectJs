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
	console.log('#personalData');
}
emptyReservation(personalData);

/**Buscador */
const searchButton = $('#search-button');
const searchInput = $('#search-input');
searchButton.click(function () {
	const inputValue = searchInput.value;
	$.get(
		'https://www.boredapi.com/api/activity',	
        	function buscar(data, status) {
            console.log(data)
            return data
        }
	);
});

/**Agregar Api */

const settings = {
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