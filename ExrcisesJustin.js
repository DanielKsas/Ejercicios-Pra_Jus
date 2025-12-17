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

for (let i = 0; i < arrayNumerosXd.length; i++) {

  resultadoSuma += arrayNumerosXd[i]
}

console.log(resultadoSuma)




// 5.tengo dos vacas
// no mentira, tengo este array
// ahora, quiero que me cree un array nuevo, a partir de ese, pero que solo estén los números pares.




let vacasArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vacasArrayNew = []

for (let i = 0; i < vacasArray.length; i++) {

  if (vacasArray[i] % 2 === 0) {
    vacasArrayNew.push(vacasArray[i]);
    console.log(vacasArrayNew)
  }
}

// 6. tenga un array

const nombres = ["Ana", "Juan", "Diego", "Laura"];
let nombre = nombres.lastIndexOf("Diego") + 1
let nombreTwo = nombres.lastIndexOf("Laura") + 1

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


vacas.splice(2, 2)


console.log(vacas)

/*10. Ejercicios */

//1 Evaluar si un entero es = 20 y menor que otro(44)

//Escribe un programa en JavaScript que evalúe tres enteros dados para determinar si alguno de ellos es mayor o igual a 20 y menor que al menos uno de los otros dos.  
//Haz clic aquí para ver la solución.

function ComprobarSiAlgunoEsMayorA20(entero1, entero2, entero3) {
  if (entero1 >= 20) {
    console.log("entero 1" + "  " + entero1 + "Es mayor a 20")
  } else if (entero2 >= 20) {
    console.log("entero 2" + "  " + entero2 + "Es mayor o igual a 20")
  } else if (entero3 >= 20) {
    console.log("entero3" + "  " + entero3 + "Es mayor o igual a 20")
  } else {
    console.log("ningun numero supera los 20")
  }
  return ComprobarSiAlgunoEsMayorA20;

}
ComprobarSiAlgunoEsMayorA20(12, 20, 2)

//2 ​​Comprueba si solo un entero es múltiplo de 7 u 11 (46)

//Escriba un programa en JavaScript para comprobar 
// si dos números enteros no negativos dados son múltiplos de 7 u 11.

function comprobarMultiplos7Y11(numero1, numero2) {
  if (numero1 < 0 || numero2 < 0) {
    return false
  }

  return numero1 % 11 === 0

}

comprobarMultiplos7Y11(14, 33)


// 3. Diferencia entre el número 1 y 13 //
// Escribe un programa en JavaScript para obtener la diferencia entre un número dado
//  y 13. Si el número es mayor que 13, devuelve el doble de la diferencia absoluta.  
//Haz clic aquí para ver la solución

function DiferenciaAbsoluta(numerogiven) {
  let numeroMayor = 13
  let diferenciaNumero = numeroMayor - numerogiven
  if (numerogiven > diferenciaNumero) {
    diferenciaNumero = (numerogiven - numeroMayor) * 2
  } else {
    diferenciaNumero = (numerogiven - numeroMayor) * -1
  }
  return diferenciaNumero

}

DiferenciaAbsoluta(2)

//4. Comprueba si un entero es positivo y el otro es negativo
//Escribe un programa en JavaScript para comprobar si dos enteros 
// dados son positivos y negativos.  

function comprobarSiUnEnteroEsPositivoYElOtroNegativo(numeroUno, numeroDos) {

  if (numeroUno >= 0 && numeroDos >= 0) {

    console.log("Ambos numeros son positivos")
  }
  if (numeroUno < 0 && numeroDos < 0) {
    console.log("Ambos son negativos")
  }
  if (numeroUno >= 0) {
    console.log(numeroUno + "es positivo")
  }
  if (numeroDos >= 0) {
    console.log(numeroDos + "Es postivo")
  }
  if (numeroUno <= 0) {
    console.log(numeroUno + "Es negativo")
  }
  if (numeroDos <= 0) {
    console.log(numeroDos + "Es negativo")
  }

}
comprobarSiUnEnteroEsPositivoYElOtroNegativo(10, -10)







function ToCheckAge(arrayAges) {
  let contador = 0;
  let promedio =
    let = false
  arrayAges = []

  for (let i = 0; i < arrayAges.length; i++) {

    if (arrayAges[i] >= 18) {


    } else {
      return true

    }
  }
  return contador + arrayAges / arrayAges.length
}


ToCheckAge([12, 20, 40])


/* push agrega un elemento al final */
/* unshift agrega un elemento al principio del array */
/* pop quita el ultimo elemento de un array */
/* shift quita el primer elemento de un array*/


arrayNumbers = [12, 14, 29, 2, 10, 43, 80]

arrayNumbers.push(0)
arrayNumbers.push(3)
arrayNumbers.unshift(90)
arrayNumbers.pop(8)
arrayNumbers.pop(2)
arrayNumbers.shift(3)

arrayNumbers[0] = 3
console.log(arrayNumbers)




let productos = ["Manzana", "Pera", "Mango", "Banano"]
let cantidades = [15, 20, 10, 50]

console.log(productos[1])

cantidades[2] = 10 + 30

console.log(productos + " " + " " + cantidades)


/*

let sumaArray = [14,13,89,93]
let totalSuma = 0
for(let i = 0; i < sumaArray.length; i ++){

totalSuma += sumaArray[i]
}

console.log(totalSuma)
*/

/*let addsArray = [90,87,29,19,14,2]
let totalResta = 0
for(let i = 0; i < restaArray.length; i++){
  totalResta +=restaArray[i]
}
console.log(totalResta + "hola") */
/*
let idk = [4,8,2,6]
let totalTodo = 0
for(let i = 0; i < idk.length; i++){
  totalTodo +=idk[i]
}
/*
console.log(totalTodo)

let idk2 = [10,230,40,90]
let TotalTodoX2 = 0
for(let i = 0; i <idk2.length; i++){
  TotalTodoX2 += idk2[i]
}
console.log(TotalTodoX2) */





let arrayToPractice = [20, 30, 19, 20, 38]


let oldArray = arrayToPractice.shift()
let newArray = arrayToPractice.unshift(3, 10, 28)

console.log(arrayToPractice)

let resultado = 0

for (let i = 0; i < arrayToPractice.length; i++) {

  resultado += arrayToPractice[i]

}
console.log(resultado)

function againToSum(arrayGemini) {
  arrayGemini = [1, 5, 2]
  let total4 = 0
  for (let i = 0; i < arrayGemini.length; i++) {
    total4 += arrayGemini[i]
  }
  return total4
}
console.log(againToSum())

/*Encontrar el Número Mayor
Objetivo: Crear una función que reciba un
 array de números y devuelva el valor más grande que contiene.

Ejemplo: [10, 3, 50, 7] debería devolver 50.*/

function toFindTheLargestNumber(arrayMayor) {

  let maximo = arrayMayor[0]

  for (let i = 1; i < arrayMayor.length; i++) {
    if (arrayMayor[i] > maximo) {
      maximo = arrayMayor[i]
    }
  }
  return maximo
}
console.log(toFindTheLargestNumber([10, 3, 50, 7]))



let littleExample = [20, 19, 19, 1, 1]
let littleExampleResult = 0

littleExample[0] = 15

for (let i = 0; i < littleExample.length; i++)
  littleExampleResult += littleExample[i]



console.log(littleExampleResult)






function NumbersMultiple(numberOne) {

  for (let i = 1; i <= 10; i++) {


    console.log(numberOne + "*" + i + "=" + numberOne * i)
  }


}

console.log(NumbersMultiple(12))






/*

input: [2, 3, [2], 4]
output: [4, 6, 8]
input: [[3], 1, 5, 4]
output: [3, 15, 12]
input: [5, 2, 1, 4, 3, [2, 3] 2]
output: [30, 12, 6, 24, 18, 12]
input: [1, 2, 3]
output: [1, 2, 3]
input: [1, 2, [2], 5, 6, [2]]
output: [4, 8, 20, 24]

*/

function arrayInAnArray(globalArray) {

  let fatherArray = [];
  let childArray = [];
  let resultadoMulChilArray = 1;
  let resultadoFinalArray = [];


  for (let i = 0; i < globalArray.length; i++) {
    if (typeof globalArray[i] === 'number') {

      fatherArray.push(globalArray[i]);

    } else if (Array.isArray(globalArray[i])) {
      childArray.push(globalArray[i]);
    }
  }


  childArray = childArray.flat();


  for (let i = 0; i < childArray.length; i++) {
    resultadoMulChilArray *= childArray[i];
  }


  for (let i = 0; i < fatherArray.length; i++) {
    resultadoFinalArray.push(fatherArray[i] * resultadoMulChilArray);
  }

  return resultadoFinalArray;
}


console.log(arrayInAnArray([1, 2, [2], 5, 6, [2]]));



function sumarTodo(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total
}
console.log(sumarTodo(3))

// ---------------------------------------------------------------------------------------------------------------//
/*   12/12/2025

  1. Crea una función que reciba como parámetro un array de solo números
  y retorne true or false, dependiendo de si todos los números que posee el array
  son mayores a 10

  Ejemplo: ([1,11,20,30,21,45]) = false
  Ejemplo 2: ([12,42,52]) = true

*/

function MayoresDiez(numeroArray) {



  for (const recorrerArray of numeroArray) {
    if (recorrerArray > 10) {
      return true
    }
    else {
      return false
    }
  }
}

console.log(MayoresDiez([12, 42, 52]))

/*

 1. Crea una función que reciba un string como parámetro, y retorne true or false
 si es que el string que recibe la función, termina con "script"

 Ejemplo: ("Javascript" [esto son los parametros])  = true [este es el return]
 Ejemplo 2: ("scriptJava") = false

*/

function ToCheckWord(wordTypedByUser) {

  if (wordTypedByUser.endsWith("script")) {

    return true
  } else {
    return false
  }



}
console.log(ToCheckWord("scriptjava"))

/*

  2. Crea una función que reciba 2 parametros, un string como primer parámetro, y como segundo parametro
  una palabra que queremos buscar en el string del primer parámemetro

  Quiero que la función retorne el índice de donde inicia la palabra que estamos buscando en el
  segundo parámetro

  Ejemplo: ("Hola Mundo", "Mundo") = 5
  Ejemplo 2: ("Lenguaje de Marcado", "Marcado") = 12

*/


function SearchString(fullWord, wordToFind) {

  return fullWord.indexOf(wordToFind)
}


console.log(SearchString("Lenguaje de Marcado", "Marcado"))


/*
 
  3. Crea una función que reciba como parámetro un array de solo números y que
  retorne el mismo array, pero con todos sus elementos al revés

  Ejemplo: ([1,2,3,4,5]) = [5,4,3,2,1]

*/

function yaNoSeQuePoner(arrayTyped) {

  let totalArray = arrayTyped.reverse()

  return totalArray
}

console.log(yaNoSeQuePoner([1, 2, 3, 4, 5]))

/*

  3. Crea una función que reciba como parámetro un String, y retorne este String
  pero con todas sus vocales intercambiadas por una "x"

  Ejemplo: ("Hola Mundo") = "Hxlx Mxndx"
  
*/

function estoyCansadoDePonerNombres(justinCanson) {

  return justinCanson.replace(/[aeiouAEIOU]/g, "x")
}


console.log(estoyCansadoDePonerNombres("Hola Mundo"))

/*

  4. Crea una función que reciba como parámetro un array de solo números
  y que retorne el array de números, pero con sus números organizados de menos a mayor

  Ejemplo: ([1,5,3,4,2]) = [1,2,3,4,5]

*/

function retornarNumero(menorAmayor) {

  let arrayOrdenado = menorAmayor.sort()

  return arrayOrdenado
}
console.log(retornarNumero([1, 5, 3, 4, 2]))


/*

  4. Crea una función que reciba como parámetro un string
  y que retorne un array con cada una de las palabras del string
  separadas por un " " (espacio)

  Ejemplo: ("Hola Mundo") = ["Hola","Mundo"]

*/

function stringAArray(texto) {
  return texto.split(" ");
}


console.log(stringAArray("Hola Mundo"));



/*

  5. Crea una función que reciba como parámetro un array de solo números
  y que retorne true or false, si al menos UNO de sus elementos es mayor a 10

  Ejemplo: ([1,2,3,4,5]) = false
  Ejemplo: ([8,2,20,4,9]) = true

*/

function comprabarArray(numeroArrays){

for(let i = 0; i < numeroArrays.length; i++){

  if(numeroArrays[i] > 10){
    return true
  }
}
return false
}

console.log(comprabarArray([8,2,20,4,9]))




/*

  5. Crea una función que reciba un string como parámetro y que retorne
  el string que recibió como parámetro, pero transformando todas las vocales
  a mayúsculas

  Ejemplo: ("Hola Mundo") = "HOlA MUndO"

*/

function vocalesMayusculas(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    if (
      caracter === "a" || caracter === "e" || caracter === "i" ||
      caracter === "o" || caracter === "u"
    ) {
      resultado += caracter.toUpperCase();
    } else {
      resultado += caracter;
    }
  }

  return resultado;
}

console.log(vocalesMayusculas("Hola Mundo"));


/*

  6. Crea una función que reciba como parámetro un array de solo Strings
  y que retorne un array con todos los strings del array convertidos a mayusculas

  Ejemplo: (["a", "e" ,"vaca", "perro"]) = ["A", "E", "VACA", "PERRO"]

*/
function arrayMayuscula(arrayEnMayuscula) {

  let nuevoArrayEnMayuscula = []

  for (let i = 0; i < arrayEnMayuscula.length; i++) {
    nuevoArrayEnMayuscula.push(arrayEnMayuscula[i].toUpperCase())
  }
  return nuevoArrayEnMayuscula
}

console.log(arrayMayuscula(["a", "e", "vaca", "perro"]))



/*

  6. Crea una función que reciba un string como primer parámetro, y como segundo
  parámetro, una palabra que queremos comprobar que exista en el string del primer parámetro

  Ejemplo: ("Rojo, azul, verde, amarillo", "amarillo") = true
  Ejemplo: ("Rojo, azul, verde, amarillo", "rosa") = false

*/

function existePalabra(texto, palabra) {
  return texto.toLowerCase().includes(palabra.toLowerCase());
}


console.log(existePalabra("Rojo, azul, verde, amarillo", "amarillo"));



/*

  7. Crea una función que reciba un string como primer parametro y
  como segundo parámetro, un número
  haz que la función retorne el string, multiplicado el número de veces
  que se haya pasado a la función como segundo parámetro

  Ejemplo: ("Hola", 3) = "HolaHolaHola"
  Ejemplo: ("Hola", 5) = "HolaHolaHolaHolaHola"

*/


function retornarStringMultiplicado(StringAMultiplicar, numeroAMultiplicar) {

  return StringAMultiplicar.repeat(numeroAMultiplicar)
}
console.log(retornarStringMultiplicado("Hola", 5))