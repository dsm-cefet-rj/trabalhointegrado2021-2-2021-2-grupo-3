import '../css/Filter.css'
import Input from '../components/Input'
import { useState } from 'react'

function handleFindBook(event){
    console.log(event.target.value);
}
export function Filter(){
    const [findBook, setFindBook] = useState("");
    return(
        <input type="text" className="input-filter"
        onChange={event => setFindBook(event.target.value)}
        placeholder="Find your book"/>
    )
}