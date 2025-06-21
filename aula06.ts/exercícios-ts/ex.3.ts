interface livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let novo_livro : livro = {
    titulo: "Soy loco por TRI",
    autor: "Muricy Ramalho",
    anoPublicacao: 2011
};

function exibirLivro(livro: livro): void {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(novo_livro)