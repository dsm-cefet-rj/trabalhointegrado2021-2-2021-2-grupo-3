import '../css/Filter.css'
import Input from '../components/Input'

function handleFindBook(e){

}
export function Filter(){
    const [findBook, setFindBook] = useState("");
    return(
        <input type="text" className="input-filter" giplaceholder="Find your book"/>
    )
}