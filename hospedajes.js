/*Constructor hospedaje*/
function Hospedaje(
	id,
	titulo,
	habitacion,
	banioPrivado,
	amoblado,
	cama,
	compañero,
	ubicacion,
	calefaccion,
	aireAcondicionado,
	precio,
	dia,
	mes,
	anio,
	imagenHabitacion,
	imagenCocina,
	imagenBanio
) {
	this.id = id;
	this.titulo = titulo;
	this.habitacion = habitacion;
	this.banioPrivado = banioPrivado;
	this.amoblado = amoblado;
	this.cama = cama;
	this.compañero = compañero;
	this.ubicacion = ubicacion;
	this.calefaccion = calefaccion;
	this.aireAcondicionado = aireAcondicionado;
	this.precio = precio;
	this.disponibilidad = new Object();
	this.disponibilidad.dia = dia;
	this.disponibilidad.mes = mes;
	this.disponibilidad.anio = anio;
	this.imagenHabitacion = imagenHabitacion;
	this.imagenCocina = imagenCocina;
	this.imagenBanio = imagenBanio;
}

//Array Hospedajes
let Hospedajes = [
	(hospedaje1 = new Hospedaje(
		1,
		'Habitacion con buena iluminación',
		'Doble',
		'Baño privado',
		'amoblado',
		'doble',
		'mujer',
		'Madrid',
		'no tiene',
		'no tiene',
		425,
		25,
		'Febrero',
		2021,
		'./IMAGES/bedroom7.png',
		'./IMAGES/bathroom.png',
		'./IMAGES/kitchen.png'
	)),
	(hospedaje2 = new Hospedaje(
		2,
		'Habitación luminosa con balcón',
		'Doble',
		true,
		true,
		'doble',
		'Hombre',
		'Barcelona',
		false,
		false,
		450,
		15,
		'Febrero',
		2021,
		'./IMAGES/bedroom2.png',
		'./IMAGES/bathroom2.jpg',
		'./IMAGES/kitchen2.jpg'
	)),
	(hospedaje3 = new Hospedaje(
		3,
		'Habitación con excelente ubicación',
		'Individual',
		false,
		true,
		'Simple',
		2,
		'Barcelona',
		false,
		true,
		475,
		20,
		'Febrero',
		2021,
		'./IMAGES/bedroom3.jpg',
		'./IMAGES/bathroom3.jpg',
		'./IMAGES/kitchen3.jpg'
	)),
	(hospedaje4 = new Hospedaje(
		4,
		'Habitación en Plaza Catalunya',
		'Doble',
		true,
		true,
		'Doble',
		2,
		'Barcelona',
		true,
		true,
		500,
		28,
		'Febrero',
		2021,
		'./IMAGES/bedroom8.png',
		'./IMAGES/bathroom4.jpg',
		'./IMAGES/kitchen4.jpg'
	)),
	(hospedaje5 = new Hospedaje(
		5,
		'Habitacion en el barrio Sants',
		'Doble',
		true,
		true,
		'Doble',
		2,
		'Barcelona',
		true,
		true,
		450,
		15,
		'Febrero',
		2021,
		'./IMAGES/room.png',
		'./IMAGES/bathroom5.jpg',
		'./IMAGES/kitchen5.jpg'
	)),
];

Hospedajes.push(
	(hospedaje6 = new Hospedaje(
		6,
		'Habitacion grande con ventana',
		'Doble',
		false,
		true,
		'Simple',
		4,
		'Madrid',
		true,
		true,
		350,
		15,
		'Marzo',
		2021,
		'./IMAGES/bedroom6.png',
		'./IMAGES/bathroom6.jpg',
		'./IMAGES/kitchen6.jpg'
	))
);