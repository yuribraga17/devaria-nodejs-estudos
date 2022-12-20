try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Agua",
        "Cafe",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente",
    ];

    const listaDeArgumentos = process.argv.slice(2);

    const listaDeProdutosSolictadoDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })

    listaDeProdutosSolictadoDisponiveis.forEach(produto => console.log(`Este produtos está disponível: ${produto}`));

    const listaDeProdutosSolicitadosNaoDisponivel = listaDeArgumentos.filter(argumento =>{
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })

    listaDeProdutosSolicitadosNaoDisponivel.forEach(argumento => console.log(`Este produto nos não temos: ${argumento}`));

    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));
}catch(e){
    console.log('Não foi possível finalizar a compra. Contate o suporte.');
}
