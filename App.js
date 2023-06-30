import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Contactos from './paginas/Contactos';
import Categorias from './paginas/Categorias';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/contactos' element={<Contactos/>}></Route>
        <Route path='/categorias' element={<Categorias/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
