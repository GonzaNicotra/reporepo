import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Inicio from '../../Pages/Inicio/Inicio';
import Contacto from '../../Pages/Contacto/Contacto';
import Error from '../../Pages/Error/Error';

export default function Rutas() {

  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}
