import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './components/Produtos';
import Nav from './pages/Nav';
import Provider from './components/context/Provider';


function App (){
    return(
        
        <BrowserRouter>
            <Provider>
            <Nav/>
            <Produtos/>
                <Routes>
                    <Route path='Home' element={<Home/>}/>
                </Routes>

                <Routes>
                    <Route path='Produtos' element={<Produtos/>}/>
                </Routes>
            </Provider>            
        </BrowserRouter>
       
    )
}
export default App;