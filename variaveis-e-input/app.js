const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiraConstantString = 'Minha primeira constante';
console.log(primeiraConstantString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});