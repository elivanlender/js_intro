var respuesta = "HOLA"

while (respuesta != "adios"){
    var respuesta = prompt("Hola (6)")
}

var drinks = 0;
var respuesta = "si"

while (drinks <=7){
    while(respuesta == "si"){
        var respuesta = prompt("Quieres un trago?");

    }
    drinks = drinks + 1;
}

const elias = {
    nombre: "Elias",
    apellido: "Mendez",
    edad: 32,
    Ocupación: "Diseñador Mecánico",
    hobbies : {
        deporte: "acroyoga",
        arte: "Fotografía",
        lectura: "Novelas",
        Películas: "Thrillers",
    }
}
console.log (elias);

const calificaciones = [9,2,4,8,10,8,9,7,6,5,7,6,4];
var min = calificaciones[0];
var max = calificaciones[0];
var acc = 0;
console.log (calificaciones.length);
for (i=0; i<calificaciones.length; i++){
    acc = acc+calificaciones[i];
    if (min > calificaciones[i]){
        min = calificaciones[i]
    }
    if (max < calificaciones[i]){
        max = calificaciones[i]
    }
}
prom = (acc/calificaciones.length);
console.log (acc);
console.log (`El número menor es ${min}`);
console.log (`El número mayor es ${max}`);
console.log (`El promedio es ${prom}`);

const calificaciones = [9,2,4,8,10,8,9,7,6,5,7,6,4];
var min = calificaciones[0];
var max = calificaciones[0];
var acc = 0;
for (i=0; i<calificaciones.length; i++){
    acc = acc+calificaciones[i];
    if (min > calificaciones[i]){min = calificaciones[i]}
    if (max < calificaciones[i]){max = calificaciones[i]}
}
prom = (acc/calificaciones.length);
console.log (`El número menor es ${min}`);
console.log (`El número mayor es ${max}`);
console.log (`El promedio es ${prom}`);


var largo = parseInt(prompt("Cuántos número de Fibonacci quieres?"));
var fib=[0,1];
for (let i = 2; i<largo; i++){
    console.log(i);
    console.log(`Posición ${i-2}, ${fib[i-2]}`);
    console.log(`Posición ${i-1}, ${fib[i-1]}`);
    fib.push(fib[i-1] + fib[i-2]);        
}
console.log(fib);