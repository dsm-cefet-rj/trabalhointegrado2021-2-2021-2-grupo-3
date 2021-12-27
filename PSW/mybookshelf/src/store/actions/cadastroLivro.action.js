export function cadastrarLivro(livro) {
    return {
        type: "cadastrarLivro",
        payload: [livro]
    }
}