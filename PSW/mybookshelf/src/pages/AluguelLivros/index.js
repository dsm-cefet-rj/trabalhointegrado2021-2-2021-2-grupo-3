import React from 'react'
import  Cards  from '../../components/Cards'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Link, useHistory , useParams} from 'react-router-dom';


export default function AluguelLivros (){
           
    return(
        <div className = "App">
            <div>
                <Header/>
                <Cards/>
                <Footer/>
            </div>
        </div>
        );
};
