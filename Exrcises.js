//1. Quiero que ese array, me lo transforme 
// en un string y se lo asigne a una variable
// de tal forma que quede como "hola mundo maradona"
// máximo 2 lineas de código, hagale

const phraseArray = ["hola", "mundo", "maradona"]

const phraseArrayUpdated = phraseArray.join(" ")


console.log(phraseArrayUpdated)


// 2. tengo el siguiente array

// quiero que le asignes a una variable, true or false, 
// si es que "cr7" está o nó en el array, 
// y la imprimas con console.log
// luego, haz lo mismo, pero con "benzemá", hagale perrito

let goatsArray = ["pelé", "messi", "juanito alimaña", "cr7"]

let valueOfArrays = goatsArray.includes("cr7")
console.log(valueOfArrays)

let valueOfArraysFalse = goatsArray.includes("VendePan")
console.log(valueOfArraysFalse)


/* 3. al siguiente array, Añadiele al inicio un 0 y al final un 6 */

const arrayNums = [1, 2, 3, 4, 5]

arrayNums.push(6)

console.log(arrayNums)

arrayNums.unshift(0)
console.log(arrayNums)


//4. al siguiente array,
//  use un bucle, y sumeme todos los números que hay en ese array, 
// y me los imprime en consola
// use un bucle, y sumeme todos los números que hay en ese array, y me los imprime en consola

const arrayNumerosXd = [10, 20, 30, 40, 50]
let resultadoSuma = 0

for(let i = 0; i < arrayNumerosXd.length; i++ ){

    resultadoSuma += arrayNumerosXd[i]
}

    console.log(resultadoSuma)




// 5.tengo dos vacas
// no mentira, tengo este array
// ahora, quiero que me cree un array nuevo, a partir de ese, pero que solo estén los números pares.


    

let vacasArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vacasArrayNew = []

for(let i = 0; i < vacasArray.length; i++){

if(vacasArray[i] %2===0){
  vacasArrayNew.push(vacasArray[i]);
   console.log(vacasArrayNew)
}
}

// 6. tenga un array

const nombres = ["Ana", "Juan", "Diego", "Laura"];
let nombre = nombres.lastIndexOf("Diego") + 1
let nombreTwo = nombres.lastIndexOf("Laura") +1    

console.log("hola, estos son los indices" + " " + nombre + " " + nombreTwo)
 

// Ahora, si tengo "Diego", quiero que me diga en qué indice del array está
// añadale ese índice a una variable y lo muestra en consola
// hace lo mismo con "Laura"

//7.// Tenemos otra vez el array de las bestias //
//  transformeme todos los elementos del array a mayúsculas, fin, tipo "PELÉ" "MESSI" etc

let goatsArrayTWo = ["pelé", "messi", "juanito alimaña", "cr7"];


let goatsArrayMayuscula = goatsArrayTWo.map(function (goat) {
  return goat.toUpperCase();
});

console.log(goatsArrayMayuscula);



//8. tengo 5 vacas

const vacas = ["Ana", "Juan", "Maria", "Carlos", "Sofia"];

// quiero que me cree otro array a partir de estas vacas, pero que solo contengan las últimas 3 vacas


vacas.splice(2,2)


console.log(vacas)