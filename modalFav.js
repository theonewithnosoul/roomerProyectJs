/**Carrito de hospedajes Favoritos */

let favoritos = [];

/**Contenedores del carrito */
const contenedorFavoritos = $('#favoritosAqui');
const carritoFavoritos = '#favoritosEnModal';
const favoritosEnCarrito = '#favoritosEnCarrito';

/**Función para cargar en el carrito */
function agregarAFavs(id) {
  
	let agregarHospedajeAfav = Hospedajes.filter((el) => el.id == id)[0];
	favoritos.push(agregarHospedajeAfav);

	contenedorFavoritos.append(`
    <div class=" mb-3" style="width: 35rem;">
        <div class="container fade-out">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <img class="d-block imagen-fav" src=${agregarHospedajeAfav.imagenHabitacion}>
                    </div>
                    <div class="col">
                        <h5 class="card-title">${agregarHospedajeAfav.titulo}</h5>
                        <h6 class="card-subtitle mb-2 ubicacion">${agregarHospedajeAfav.ubicacion}</h6>
                        <h5 class="card-text">Habitación ${agregarHospedajeAfav.habitacion}</h5>
                        <h5 class="card-text">Cama ${agregarHospedajeAfav.cama}</h5>
                        <h5 class="card-text">Precio por mes ${agregarHospedajeAfav.precio}€ </h5>
                        
                    </div>
                   
                </div>
                <button id="eliminar${agregarHospedajeAfav.id}" class="btn btn-eliminar btn-outline-success">eliminar</button>
                
            </div>
        </div>
    </div>
        `);


	/**Eliminar hospedaje de fav */
	let botonEliminar = document.getElementById(`eliminar${agregarHospedajeAfav.id}`);

	botonEliminar.addEventListener('click', () => {
        contenedorFavoritos.innerHTML = '';
		botonEliminar.parentElement.remove();
		favoritos = favoritos.filter((el) => el.id != agregarHospedajeAfav.id);
        if (favoritos.length == 0) {
            $('#cartelVacio').show()
        }
       
	});

}



