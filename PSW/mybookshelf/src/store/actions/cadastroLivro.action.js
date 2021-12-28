export function cadastrarLivro(livro) {
    return {
        type: "cadastrarLivro",
        payload: [livro]
    }
}
export function removerLivro(livro) {
    return {
        type: "removerLivro",
        payload: [livro]
    }
}