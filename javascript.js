/**Hospedajes.html */
//Contenedor Cards
const contenedorCards = document.getElementById('contenedorCardPadre');

//event en select + filtro
var select = document.getElementById('inputGroupUbicacion');

select.addEventListener('change', () => {
	let eleccion = select.value;
	if (eleccion === '0') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Barcelona'));
	} else if (eleccion === '1') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Madrid'));
	} else {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Berlin'));
	}

	localStorage.pais = eleccion;
});
mostrar(Hospedajes);

//funcion para mostrar hospedajes por ubicación
function mostrar(Hospedajes) {
	contenedorCards.innerHTML = '';
	Hospedajes.forEach((hospedaje) => {
		let div = document.createElement('div');
		div.classList.add('col-sm-3', 'mt-3');
		div.innerHTML += `

            <div class="card">     
            <img class="d-block w-100 carousel-imagen" src=${hospedaje.imagenHabitacion} >                
            <div class="card-body">
                <h5 class="card-title"> ${hospedaje.titulo}</h5>
                <h5 class="ubicacion"> ${hospedaje.ubicacion}</h5> 
                <p class="card-text">  Habitación  ${hospedaje.habitacion}</p> 
                <h5>${hospedaje.precio} € </p>
                </p>
                <button type="button" id="boton-ver-mas${hospedaje.id}"
                    class="btn btn-outline-success btn-primary boton-modal  texto-color"
                    data-toggle="modal" data-target="#my-modal">Ver más</button>

            </div> 
    	</div>
		`;
		contenedorCards.appendChild(div);

		let boton = document.getElementById(`boton-ver-mas${hospedaje.id}`);

		boton.addEventListener('click', () => {
			var hospedajeJSON = JSON.stringify(hospedaje);
			localStorage.setItem = hospedajeJSON;

			abrirModal(hospedaje.id);
		});
	});
}

//Const para modal
const contenedorModal = document.getElementById('contenedorModal');

// Funcion para abrir modal
let verModal = [];

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
				<p>Disponibilidad desde el <br> ${agregarHospedaje.disponibilidad}</p>

			</div>

			<div class="col-4">
				<h4 class="titulo-modal">Comodidades</h4>
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

	let botonReservar = document.getElementById(`boton-reservar${agregarHospedaje.id}`);

	
	botonReservar.addEventListener('click', () => {
        var hospedajeCompletoJSON = JSON.stringify(agregarHospedaje);
        sessionStorage.setItem('hospedaje', hospedajeCompletoJSON)
        abrirVentanaReserva(agregarHospedaje.id);
    });

	//  botonReservar.addEventListener('click', () => {
	//  	abrirVentanaReserva();
	//  });
}
// agregarHospedaje.id ${agregarHospedaje.id}
function abrirVentanaReserva() {
	window.open('reserva.html', '_self', 'reserva');
}
/**FIN Hospedajes.html */

