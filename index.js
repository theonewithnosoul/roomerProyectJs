/**HOME */

// Boton busqueda home
let botonBusquedaHome = document.getElementById('botonBusquedaHome');

botonBusquedaHome.addEventListener('click', (event) => {
	event.preventDefault();
    
	abrirVentanaBusqueda();

});

/**Jquery que no funciona nada funciona */
// let botonBusquedaHome = $('botonBusquedaHome');

// botonBusquedaHome.click(function (event) {
// 	event.preventDefault();
// 	abrirVentanaBusqueda();
// });

function abrirVentanaBusqueda() {
	window.open('hospedajes.html', '_self', 'Hospedajes');
}

//una función para tomar los datos de la ubicacion del formulario y que al apretar el boton buscar abra la página
//guardar los datos del formulario en el localStorage y transformarlos a json y que los tome al apretar buscar

/**No quiere funcionar asi que borre todo. este fue mi intento. */
// let selectorUbicacion = $('inputGroupSelect03');


let selectorUbicacion = document.getElementById('inputGroupUbicacion03')
console.log(selectorUbicacion)

selectorUbicacion.addEventListener('change', () =>{
    let seleccion = selectorUbicacion.value
    if (seleccion == '0'){
      let barcelonaJSON = JSON.stringify(seleccion)
      sessionStorage.setItem = barcelonaJSON
    } else if (seleccion == '1') {
		let madridJSON = JSON.stringify(seleccion);
		sessionStorage.setItem = madridJSON;
	} else if (seleccion == '2') {
		let berlinJSON = JSON.stringify(seleccion);
		sessionStorage.setItem = berlinJSON;
	}else console.log ("ciudad inexistente")
})


