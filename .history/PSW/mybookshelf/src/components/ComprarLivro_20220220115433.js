export function ComprarLivro(){
    function handleAlert (){
        alert("Livro comprado")
    }
    return(
        <button onClick={handleAlert}>Comprar livro</button>
    )
}