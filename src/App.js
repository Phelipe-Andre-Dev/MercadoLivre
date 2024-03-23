import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './components/Produtos';
import Nav from './pages/Nav';



function App (){
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='Home' element={<Home/>}/>
            </Routes>

            <Routes>
                <Route path='Produtos' element={<Produtos/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;