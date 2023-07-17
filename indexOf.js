//saber se email e valido
//tem que ter pelo menos um @
//tem q ter um ponto depois do @

const email = "teste@hotmail.com";

const indexArroba = email.indexOf("@");

const indexPontoArroba = email.indexOf(".", indexArroba);

if (indexPontoArroba > indexArroba) {
    console.log("Email atende aos requisitos");
} else {
    console.log("Não há nenhum ponto depois do @");
}