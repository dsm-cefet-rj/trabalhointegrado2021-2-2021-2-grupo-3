import '../css/Filter.css'
import Input from '../components/Input'
import { useState } from 'react'

function handleFindBook(event){
    event => setFindBook(event.target.value)
    console.log(event.target.value);
}
export function Filter(){
    const [findBook, setFindBook] = useState("");
    return(
        <input type="text" className="input-filter"
        onChange={handleFindBook}       
        placeholder="Find your book"/>
    )
}