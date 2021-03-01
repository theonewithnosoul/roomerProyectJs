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
		'Baño Privado',
		'Amoblado',
		'doble',
		'Hombre',
		'Barcelona',
		'no tiene',
		'no tiene',
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
		'Baño compartido',
		'Amoblado',
		'Simple',
		2,
		'Barcelona',
		'No tiene',
		'Tiene',
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
		'Baño privado',
		'Amoblado',
		'Doble',
		2,
		'Barcelona',
		'Tiene',
		'Tiene',
		500,
		28,
		'Febrero',
		2021,
		'./IMAGES/bedroom5.png',
		'./IMAGES/bathroom4.jpg',
		'./IMAGES/kitchen4.jpg'
	)),
	(hospedaje5 = new Hospedaje(
		5,
		'Habitacion en el barrio Sants',
		'Doble',
		'Baño privado',
		'Amoblado',
		'Doble',
		2,
		'Barcelona',
		'Tiene',
		'Tiene',
		450,
		15,
		'Febrero',
		2021,
		'./IMAGES/room.png',
		'./IMAGES/bathroom5.jpg',
		'./IMAGES/kitchen5.jpg'
	)),
	(hospedaje7 = new Hospedaje(
		7,
		'Habitación para estudiante cerca de la Universidad',
		'Individual',
		'Baño Privado',
		'Amoblado',
		'Doble',
		2,
		'Berlín',
		'Tiene',
		'Tiene',
		350,
		15,
		'Febrero',
		2021,
		'./IMAGES/bedroom7.png',
		'./IMAGES/bathroom7.jpg',
		'./IMAGES/kitchen7.jpg'
	)),
	(hospedaje8 = new Hospedaje(
		8,
		'Habitación para pareja en el centro',
		'Individual',
		'Baño Privado',
		'Amoblado',
		'Doble',
		2,
		'Berlín',
		'Tiene',
		'Tiene',
		480,
		15,
		'Febrero',
		2021,
		'./IMAGES/bedroom.jpg',
		'./IMAGES/bathroom8.jpg',
		'./IMAGES/kitchen8.jpg'
	))
];

Hospedajes.push(
	(hospedaje6 = new Hospedaje(
		6,
		'Habitacion grande con ventana',
		'Doble',
		'Baño privado',
		'Amoblado',
		'Simple',
		4,
		'Madrid',
		'Tiene',
		'Tiene',
		350,
		15,
		'Marzo',
		2021,
		'./IMAGES/bedroom6.png',
		'./IMAGES/bathroom6.jpg',
		'./IMAGES/kitchen6.jpg'
	))
);