import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'

function App(){
  return(

    <BrowserRouter>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>

        <Routes>
          <Route exact path='newproject' element={<NewProject/>}/>
        </Routes>

        <Routes>
          <Route exact path='projects' element={<Projects/>}/>
        </Routes>

      </Container>
      
    </BrowserRouter>
    
    
  )
}
export default App