import livro1 from '../../img/livro1.jpg'
import livro2 from '../../img/livro2.jpg'
import livro3 from '../../img/livro3.jpg'
import livro4 from '../../img/livro4.jpg'

const livrosIniciais = [{
    titulo: "Código Limpo",
    descricao: "Este livro tem como objetivo descrever...",
    proprietario: "Lucas",
    dataAluguel: "10/05/2021",
    img: livro3
  },{
    titulo: "O poder do hábito",
    descricao: "Este livro tem como objetivo descrever...",
    proprietario: "Jorge",
    dataAluguel: "20/06/2021",
    img: livro4
  }]

export default (state = livrosIniciais, action) => {
    switch (action.type) {
        case "cadastrarLivro":
            return state.concat(action.payload[0])
        case "removerLivro":
            return state.filter(p => p != action.payload[0])            
        default: 
            return state
    }
}