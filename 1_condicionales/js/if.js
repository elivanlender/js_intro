alert ("Quieres jugar con Legos?");
Nombre = prompt("Cuál es tu nombre?");
x = prompt(`Cuál es tu edad ${Nombre}`);
var edad = parseInt(x);

if (edad < 4) {
    alert (`Estas shavo ${Nombre}, :c`);
}else if (edad >= 4 && edad <=99) {
    alert (`Diviertete ${Nombre}!`);
}else if (edad > 99) {
    alert (`Ya estás muy cerca del panteón ${Nombre} D:`);
}
else{
    alert ("Esas edad no es válida! -ERROR-")
}

alert ("Quieres jugar con Legos?");
Nombre = prompt("Cuál es tu nombre?");
x = prompt(`Cuál es tu edad ${Nombre}`);
var edad = parseInt(x);

edad <4 ? alert (`Estas shavo ${Nombre}, :c`) : edad <=99 ? alert (`Diviertete ${Nombre}!`) : alert (`Ya estás muy cerca del panteón ${Nombre} D:`)

x = prompt("Dame un número o qué?");
var num = parseInt(x);

num%5 == 0 ? alert (`Yeah! el ${num} es un número cool!`) : alert (`Nah, el ${num} está bien shafa`);

code = prompt("Ingresa tu código carnal!");

code == "happy" ? alert ("La vida es corta bro") : code == "sad" ? alert("Go for taquitos bro") : alert("Ese código no existe carnal");

level = prompt("Ingresa tu nivel prro");
level < 0 ? alert ("Wey, ni te topo") : level >= 0 && level <= 10 ? alert("Ah prro! Eres un paladin") : level > 10 && level <= 30 ? alert ("Arre mi golden KNGITH") : level > 30 && level <= 50 ? alert("Eres un GOD") : alert("Nah, ese pedo ni existe");

var Jugador1 = prompt("Ingresa tu jugada prro 1!");
var Jugador2 = prompt("Ingresa tu jugada prro 2!");
switch (Jugador1){
    case "piedra" :
        Jugador2 == "piedra" ? alert(`WOW! Empataron con ${Jugador1}`) : Jugador2 == "tijera" ? alert(`Ganó el jugador 1 con ${Jugador1}`) : Jugador2 == "papel" ? alert(`Gana el jugador 2 con ${Jugador2}`) : alert("Alguien hixo trampa!");
        break;
    case "tijera" :
        Jugador2 == "tijera" ? alert(`WOW! Empataron con ${Jugador1}`) : Jugador2 == "papel" ? alert(`Gana el jugador 1 con ${Jugador1}`) : Jugador2 == "piedra" ? alert(`Gana el jugador 2 con ${Jugador2}`) : alert("Alguien hixo trampa!");
        break;
    case "papel":
        Jugador2 == "papel" ? alert(`WOW! Empataron con ${Jugador1}`) : Jugador2 == "piedra" ? alert(`Gana el jugador 1 con ${Jugador1}`) : Jugador2 == "tijera" ? alert(`Gana el jugador 2 con ${Jugador2}`) : alert("Alguien hixo trampa!");
        break;
    default : alert("Epa epa, eso no vale!");
}

var x = prompt("Ingresa un número:");
var y = prompt("Ingresa un número:");
var z = prompt("Ingresa un número:");
var num1 = parseInt(x);
var num2 = parseInt(y);
var num3 = parseInt(z);
numMax = Math.max(num1, num2, num3);
alert(`El número máximo es el ${numMax}!`);
