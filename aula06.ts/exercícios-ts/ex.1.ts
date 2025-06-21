let produto: string = "Mouse";
let preco: number = 59.90;
let disponivel : boolean = true;
function mostrarProduto(produto: string, preco: number, disponivel: boolean): void {
    console.log (`Produto: ${produto} - Preço: R$${preco} - Disponível: ${disponivel ? 'Sim' : 'Não'}`);
}
mostrarProduto(produto, preco, disponivel);
