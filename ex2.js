function replaceAll(original, text, newText){
    while (numero !== numero.replace(text, newText)){
    original = original.replace(text, newText);
    }
    return original
}

let numero = "1,350,00"
console.log(replaceAll(numero, ",", "."))

//let numero = "1,350,000"

//while (numero !== numero.replace(",", ".")){
//numero = numero.replace(",", ".")
//}
//console.log(numero)