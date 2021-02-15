
//Contenedor Cards
const contenedorCards = document.getElementById('contenedorCardPadre');

//Funcion para mostrar mapa de la ciudad correspondiente
let mapaBarcelona = document.getElementById('mapaBarcelona');
let mapaMadrid = document.getElementById('mapaMadrid');

//event en select + filtro
var select = document.getElementById('inputGroupUbicacion');

select.addEventListener('change', () => {
	let eleccion = select.value;
	if (eleccion === '0') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Barcelona'));
		mapaBarcelona.innerHTML = '';
		let divMapaB = document.createElement('div');
		divMapaB.classList.add('col');
		divMapaB.innerHTML += `
		<iframe class="mapa"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40275.757954828165!2d2.1430467032310685!3d41.38465085872697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1603490507379!5m2!1ses-419!2sar"
		width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
		tabindex="0"></iframe>`;
		mapaBarcelona.appendChild(divMapaB);
	} else if (eleccion === '1') {
		mostrar(Hospedajes.filter((el) => el.ubicacion == 'Madrid'));
		mapaMadrid.innerHTML = '';
		let divMapaA = document.createElement('div');
		divMapaA.classList.add('col');
		divMapaA.innerHTML += `
		<iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48601.73362672446!2d-3.731045456806114!3d40.41752625499234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zTWFkcmlkLCBFc3Bhw7Fh!5e0!3m2!1ses-419!2sar!4v1612917032884!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
		mapaMadrid.appendChild(divMapaA);
	} else {
		console.log('ciudad no disponible');
	}

	localStorage.pais = eleccion;
});
mostrar(Hospedajes);

//funcion para mostrar hospedajes por ubicación
function mostrar(Hospedajes) {
	contenedorCards.innerHTML = '';
	Hospedajes.forEach((hospedaje) => {
		let div = document.createElement('div');
		div.classList.add('col-sm-6');
		div.innerHTML += `

            <div class="card">     
            <img class="d-block w-100 carousel-imagen" src=${hospedaje.imagenHabitacion} >                
            <div class="card-body">
                <h5 class="card-title"> ${hospedaje.titulo}</h5>
                <p class="card-text"> ${hospedaje.ubicacion} <br>
                  Habitación  ${hospedaje.habitacion} <br>
                <p>${hospedaje.precio} € </p>
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
		
			localStorage.guardarHospedaje = hospedajeJSON;

			console.log(hospedajeJSON);

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
		<button type="button" id="boton-reservar"
			class="btn btn-outline-success btn-primary boton-modal  texto-color "><a
				class="boton-reserva">Reservar</a></button>
	</div>
`;
	contenedorModal.appendChild(divModal);

	let botonReservar = document.getElementById(`boton-reservar`);

	botonReservar.addEventListener('click', () => {
		abrirVentanaReserva();
	});
}
// agregarHospedaje.id ${agregarHospedaje.id}
function abrirVentanaReserva() {
    window.open('reserva.html','_self', "reserva")
};



//una función para tomar los datos de la ubicacion del formulario y que al apretar el boton buscar abra la página
//guardar los datos del formulario en el localStorage y transformarlos a json y que los tome al apretar buscar 





//Boton busqueda home 
// let botonBusquedaHome = $('botonBusquedaHome')

// botonBusquedaHome.click(function(event){
// 	event.preventDefault()
// 	abrirVentanaBusqueda();
// })

// function abrirVentanaBusqueda() {
//     window.open('hospedajes.html','_self', "Hospedajes")
// };


//guardar datos en el local de la home 

// let seleccion = $('inputGroupSelect04');

// seleccion.change(function(e){
// 	e.preventDefault();
// 	let eleccionUbicacion = seleccion.value;
// 	let eleccionUbicacionJSON = JSON.stringify(eleccionUbicacion);
// 	localStorage.guardarUbicacion = eleccionUbicacionJSON
// 	console.log(eleccionUbicacionJSON)

// })


