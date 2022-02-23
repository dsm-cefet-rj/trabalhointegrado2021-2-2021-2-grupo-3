import "../css/ComprarLivro.css"
import { Link } from "react-router-dom";


export function ComprarLivro(){
    function handleAlert (){
        alert("Livro comprado")
    }
    return(
        
        <Link to="/chat"><button Comprar livro></button></Link>
    )
}