/*
 * Crea un programa que invierta el orden de una cadena de texto 
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


function invertirCadena(texto) {
    let resultado = "";

    for (let i = texto.length; i < texto;  i--){
        resultado +=[i];
    }
    return resultado;
}


console.log(invertirCadena("Hola mundo"));



/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 * 
 * string1 = "hola"
string2 = "como estas"
output1 = "hl"
output2 = "cm ests"
 */

function AnyThing(string1, string2){

let out1 = ""
let out2 = ""
for(let i = 0;  i < string1.length; i++){

    if(!string2.includes(string1[i])){
out1 += string1[i]
    }
}

for(let i = 0; i < string2.length; i++){

    if(!string1.includes(string2[i])){
        out2 += string2[i]
}

}
return [out1, out2]
}
console.log(AnyThing("Hola","como estas"))