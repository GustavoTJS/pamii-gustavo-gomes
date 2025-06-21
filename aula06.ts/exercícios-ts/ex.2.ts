let cidades : string[] = ["Santos", "São Paulo", "Belo Horizonte", "Recife", "Ijaci", "Manchester"];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => { console.log(cidade); });
}

listarCidades(cidades);