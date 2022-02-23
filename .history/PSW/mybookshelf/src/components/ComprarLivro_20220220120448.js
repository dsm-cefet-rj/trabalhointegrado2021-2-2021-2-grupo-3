import "../css/ComprarLivro.css"
import { Link } from "react-router-dom";

export function ComprarLivro(){
    return(
        <Link to="/chat" className="s">Comprar livro</Link>
    )
}