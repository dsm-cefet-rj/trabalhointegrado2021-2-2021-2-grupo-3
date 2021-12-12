import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Card from "./components/Cards";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

import Routes from './routes';

function App() {
    return ( 
            <Router>
                <Routes/>
            </Router>
    );
}

export default App; 