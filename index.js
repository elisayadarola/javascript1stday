/*EJERCICIO 1*/
let hacker1 ="Skywalker"
console.log (hacker1)
console.log("The name of the driver is", hacker1)
let hacker2 ="Achiles"
console.log("The name of the navigator is", hacker2)

/*EJERCICIO 2*/
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has "+hacker1.length+ " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has" + hacker1.length + "characters.")
} else {
  console.log("ow, you both have equally long names, XX characters!")
}
/*EJERCICIO 3 
Crear un bucle que imprima en la consola todos los números del 1 al 10
Crear un bucle que imprima los números del 20 al 10, hacia atrás
Crear un bucle que imprima los múltiplos de 3 entre el 0 y el 10*/

for (let i = 0; i < 11; i++) {
  console.log(i);
};

for (let ok = 21; ok > 0; ok--){
  console.log(ok)
};

for (var i = 0; i < 10; i += 3) {
console.log(i)
} 
