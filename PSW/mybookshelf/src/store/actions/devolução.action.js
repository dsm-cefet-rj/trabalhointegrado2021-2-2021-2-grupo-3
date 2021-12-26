export function agendarDevolução(livro) {
    return {
        type: "AgendarDevolução",
        payload: [livro]
    }
}