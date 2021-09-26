let calificacionParcial1 = 0.0;
let calificacionParcial2 = 0.0;
let calificacionParcial3 = 0.0;
let promedioParciales = 0.0;
let examenFinal = 0.0;
let calificacionTrabajo = 0.0;
let calificacionFinal = 0.0;
let nota1 = 0.0;
let nota2 = 0.0;
let nota3 = 0.0;

calificacionParcial1 = Number(prompt('Ingrese calificación del parcial 1: '));
calificacionParcial2 = Number(prompt('Ingrese calificación del parcial 2: '));
calificacionParcial3 = Number(prompt('Ingrese calificación del parcial 3: '));
examenFinal = Number(prompt('Ingrese la nota del examen final: '));
calificacionTrabajo = Number(prompt('Ingrese calificación del trabajo: '));

promedioParciales = (calificacionParcial1 + calificacionParcial2 + calificacionParcial3)/3;

nota1 = round((promedioParciales*0.55));
nota2 = round(examenFinal*0.30);
nota3 = round(calificacionTrabajo*0.15);

calificacionFinal = round(nota1 + nota2 + nota3);

alert(`Su calificación final para la materia de Algotimos es: ${calificacionFinal}`);


function round(num) {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
