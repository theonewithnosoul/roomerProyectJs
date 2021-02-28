//Contenedor Cards
const contenedorCards = document.getElementById('contenedorCardPadre');

//event en select + filtro
var select = document.getElementById('inputGroupUbicacion');
var botonBuscar = document.getElementById('botonBusquedaHome');

botonBuscar.addEventListener('click', () => {
	let eleccion = select.value;
	if (eleccion === '0') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Barcelona'));
	} else if (eleccion === '1') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Madrid'));
	} else if (eleccion === '2') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Berlín'));
	}
	$('html, body').animate(
		{
			scrollTop: $('#scroll').offset().top,
		},
		2000
	);
});

let deleted = []
//funcion para mostrar hospedajes por ubicación
function mostrar(Hospedajes) {
	contenedorCards.innerHTML = '';
	Hospedajes.forEach((hospedaje) => {
		let div = document.createElement('div');
		div.classList.add('col-sm-3', 'mt-3');
		div.innerHTML += `
            <div id="scroll" class="card card-shadow">     
            <img class="d-block w-100 carousel-imagen" src=${hospedaje.imagenHabitacion} >                
            <div id="agregado" class="card-body">
                <h5 class="card-title"> ${hospedaje.titulo}</h5>
                <h5 class="ubicacion"> ${hospedaje.ubicacion}</h5> 
                <p class="card-text">  Habitación  ${hospedaje.habitacion}</p> 
                <h5>${hospedaje.precio} € </h5>
		
				<p class="oculto" id="agregadoA${hospedaje.id}">agregado</p>
				<button id="botonFav${hospedaje.id}" type="button" class="btn btn-outline-danger  heart-button"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
				<path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
			  </svg></button>
			  
                <button type="button" id="boton-ver-mas${hospedaje.id}"
                    class="btn btn-outline-success btn-primary boton-modal  texto-color"
                    data-toggle="modal" data-target="#my-modal">Ver más</button>

            </div> 
    	</div>
		`;
		contenedorCards.appendChild(div);

		/** evento para agregar a favoritos */
		let agregarFav = document.getElementById(`botonFav${hospedaje.id}`);

		agregarFav.addEventListener('click', (e) => {
			$('#cartelVacio').hide();
			agregarAFavs(hospedaje.id);
			$(`#agregadoA${hospedaje.id}`).toggle();
			e.preventDefault();
			console.log(favoritos)
		});
		
		/**Boton para abrir el modal: ver más */
		let boton = document.getElementById(`boton-ver-mas${hospedaje.id}`);

		boton.addEventListener('click', () => {
			abrirModal(hospedaje.id);
		});
	});
}

//Contenedor para modal
const contenedorModal = document.getElementById('contenedorModal');

// Funcion para abrir modal
let verModal = [];

//Carga de hospedaje al modal
function abrirModal(id) {
	contenedorModal.innerHTML = '';

	let agregarHospedaje = Hospedajes.filter((el) => el.id == id)[0];
	verModal.push(agregarHospedaje);

	let divModal = document.createElement('div');
	divModal.classList.add('modal-content', 'alineacion-modal', 'modal-body');
	divModal.innerHTML += `
	<h2>${agregarHospedaje.titulo}</h2>
	<div id="carouselExampleIndicators-modal-1"
		class="carousel slide carousel-size carousel-size__modal">
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators-modal-1" data-slide-to="0"
				class="active"></li>
			<li data-target="#carouselExampleIndicators-modal-1" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators-modal-1" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active card ">
				<img src="${agregarHospedaje.imagenHabitacion}"
					class="d-block w-100  carousel-imagen__modal modal__img "
					alt="bedroom1">
			</div>
			<div class="carousel-item">
				<img src="${agregarHospedaje.imagenCocina}"
					class="d-block w-100 carousel-imagen__modal modal__img " alt="kitchen1">
			</div>
			<div class="carousel-item">
				<img src=".${agregarHospedaje.imagenBanio}"
					class="d-block w-100 carousel-imagen__modal modal__img" alt="bathroom1">
			</div>
		</div>
	</div>
	<a class="carousel-control-prev carousel-control-prev__modal"
		href="#carouselExampleIndicators-modal-1" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next carousel-control-next__modal"
		href="#carouselExampleIndicators-modal-1" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
	<div class="container contenedor-modal">
		<div class="row">
			<div class="col-4">

				<p>${agregarHospedaje.banioPrivado}</p>
				<p>${agregarHospedaje.amoblado}</p>
				<p>Cama ${agregarHospedaje.cama}</p>
				<p>Compañero/a de piso: ${agregarHospedaje.compañero}</p>
				<p>Ubicación: ${agregarHospedaje.ubicacion}</p>
				<p>Calefacción: ${agregarHospedaje.calefaccion}</p>
				<p>Aire Acondicionado: ${agregarHospedaje.aireAcondicionado}</p>
				<p>Precio: ${agregarHospedaje.precio} € por mes </p>

			</div>

			<div class="col-4">
				<h4 class="titulo-modal ml-5">Comodidades</h4>
				<ul>

					<div class="col">
						<li class="comodidades-icons"><img class="svg-size"
								src="./SVG/Recurso 1.svg" alt="SVG living">
							<p>Living</p>
						</li>
						<div class="w-100"></div>
						<li class="comodidades-icons"><img class="svg-size"
								src="./SVG/Recurso 3.svg" alt="SVG Cama">
							<p>Cama Queen</p>
						</li>
						<li class="comodidades-icons"><img class="svg-size"
								src="./SVG/Recurso 5.svg" alt="SVG baño">
							<p>Baño privado</p>
						</li>
					</div>
				</ul>
			</div>
			<div class="col-4">
				<ul>
					<div class="titulo-modal"></div>
					<li class="comodidades-icons"><img class="svg-size"
							src="./SVG/Recurso 6.svg" alt="SVG cocina">
						<p>Cocina completa</p>
					</li>
					<li class="comodidades-icons"><img class="svg-size"
							src="./SVG/Recurso 7.svg" alt="SVG estudio">
						<p>Area de estudio</p>
					</li>
					<li class="comodidades-icons"><img class="svg-size"
							src="./SVG/Recurso 8.svg" alt="SVG lavarropas">
						<p>Lavarropas</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="boton-reservar">
		<button type="button" id="boton-reservar${agregarHospedaje.id}"
			class="btn btn-outline-success btn-primary boton-modal  texto-color "><a
				class="boton-reserva">Reservar</a></button>
	</div>
`;
	contenedorModal.appendChild(divModal);

	/**Reservar */

	let botonReservar = document.getElementById(`boton-reservar${agregarHospedaje.id}`);

	botonReservar.addEventListener('click', () => {
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
let date = document.getElementById('start');

/**Guardar la fecha en el storage para enviar a reserva */
date.onchange = function () {
	let electedDate = this.value;
	var electedDateJson = JSON.stringify(electedDate);
	sessionStorage.setItem('fecha', electedDateJson);
	console.log(electedDate);
	return electedDate;
};

let getDate = date.onchange();
