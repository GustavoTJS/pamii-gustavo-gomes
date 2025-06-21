var novo_livro = {
    titulo: "Soy loco por TRI",
    autor: "Muricy Ramalho",
    anoPublicacao: 2011
};
function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo, ", Autor: ").concat(livro.autor, ", Ano de Publica\u00E7\u00E3o: ").concat(livro.anoPublicacao));
}
exibirLivro(novo_livro);
