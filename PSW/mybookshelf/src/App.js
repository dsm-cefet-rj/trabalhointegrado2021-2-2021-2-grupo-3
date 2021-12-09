import './App.css';
import Card from "./components/Cards";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";


function App() {
    return ( 
            <div className = "App">
                <div>
                    <Header/>
                    <Card/>
                    <Footer/>
                </div>
            </div>
    );
}

export default App; 