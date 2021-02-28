/**HOME */

// Boton busqueda home
let botonBusquedaHome = document.getElementById('botonBusquedaHome');

botonBusquedaHome.addEventListener('click', (event) => {
	event.preventDefault();
    
	abrirVentanaBusqueda();

});


function abrirVentanaBusqueda() {
	window.open('hospedajes.html', '_self', 'Hospedajes');
}

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


