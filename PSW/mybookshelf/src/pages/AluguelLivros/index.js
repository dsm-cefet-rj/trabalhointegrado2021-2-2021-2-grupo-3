import React from 'react'
import  Cards  from '../../components/Cards'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Link, useHistory , useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


function Main(){
           
    return(
        <div>
            <Header/>
            <Cards/>
            <Footer/>
        </div>
    );
};

export default Main;