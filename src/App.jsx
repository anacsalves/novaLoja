import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ListaProdutos from './pages/listaProdutos';
import Produto from './pages/produto';


function App() {
  return(
    <>
    <BrowserRouter>
     <Routes>
      <Route index element={<ListaProdutos/>}/>
      <Route path='/produto/:id' element={<Produto/>}/>

     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
