const listaArgumentos = process.argv.slice(2);

console.log('--------------[EXECUTANDO FOR]--------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição: ${controladorFor}: Valor lido: ${listaArgumentos[controladorFor]}`);
}

console.log('--------------[EXECUTANDO WHILE]--------------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição: ${controladorWhile}: Valor lido: ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('--------------[EXECUTANDO DO WHILE]--------------');
let controladorDoWhile = 0;
do{
    console.log(`Posição: ${controladorDoWhile}: Valor lido: ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)