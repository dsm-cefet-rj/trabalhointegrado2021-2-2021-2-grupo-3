export function livroAlugar(livro) {
    return {
        type: "livroAlugar",
        payload: [livro]
    }
}