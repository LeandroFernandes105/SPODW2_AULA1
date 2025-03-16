function exibeXadrez(tamanho) { 
    let linha = ""; 
    for(let i = 0; i < tamanho; i++) { 
        linha += "# "; 
    } 
    for (let i = 0; i < tamanho; i++) { 
        if (i % 2 == 1) 
            console.log(linha); 
        else 
            console.log(" " + linha); 
    } 
}
exibeXadrez(8);
