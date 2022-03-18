{
function PositivoNegativo(num){
    num<0 ? console.log(`El número ${num} es negativo`) : num>0 ? console.log(`El número ${num} es positivo`) : console.log(`El número ${num} es cero`);   
}

let num = parseInt(prompt("Ingresa un número cualquiera"));
PositivoNegativo(num);
}
{
    function MostrarAhorro(Nombre){
        let Cuentas = {
            pepe: 2500,
            karla: 7825,
            pedro: 653,
            Guadalupe: 84167
        }
        let cliente = Nombre;
        console.log ()
        console.log (Nombre);
        console.log (Cuentas.pepe);
        console.log (`El ahorro de ${Nombre} es $${Cuentas.pepe}`)
        console.log (`El ahorro de ${Nombre} es $${Cuentas.cliente}`)
        console.log (Cuentas.Nombre);      
    }

    let Nombre = prompt("Ingrese el nombre del cuentahabiente:");
    MostrarAhorro(Nombre);


}

function RetornoNumber(muestra){
    var resultado=[];
    console.log(muestra.length)
    for (let i=0; i < muestra.length; i++){
        if (typeof muestra[i] === 'number'){
            resultado.push(muestra[i]);
        }
    }
    return resultado;
}
let muestra = ["PEPE", 3, 4, "dos", 8, "tres", 5, 9, 1, "cero"];
    
console.log(RetornoNumber(muestra));


function arrayPares(fin){
    let result=[];
    for(i=0; i<=fin; i=i+2){
        result.push(i);
    }
    return result;
}
let fin = parseInt(prompt("Ingresa un número!"));
console.log(arrayPares(fin));


function getRandomInt(lim,max) {
    for (i=0; i<lim; i++){
        console.log(Math.floor(Math.random() * max));
    }
  }
let max = parseInt(prompt("Número aleatorio entre 1 y..."));
let lim = parseInt(prompt("Cuántos números quieres?"));

getRandomInt(lim,max);