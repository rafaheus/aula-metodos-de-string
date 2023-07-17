const nome = "rafael gomes heuseler";
const arrayDeNomes = nome.split(" ");



let nomeFormatado = "";
for(let item of arrayDeNomes) {
    //transformar a inicial de cada item em maiuscula
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " "
    
}
console.log(nomeFormatado.trim());