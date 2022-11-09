import React from 'react';
import './Inicio.css';
import MyBackgroundImage from '../../assets/inicio.webp'
import LogoBunima from '../../assets/logoBunima.webp'
import LD from '../../assets/diseñologo.png'
import MG from '../../assets/megafono.png'
import DW from '../../assets/diseñoweb.png'
import IF from '../../assets/inicioFooter.jpeg'
import Ofi from '../../assets/ofi.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Contacto from '../Contacto/Contacto';


export default function Inicio() {

  return (
    <>
      <div className='inicioFinal'>
        <div className='inicioFinalImg'>
          <img className=' imagenOfi' src={Ofi} alt="" />
        </div>
        <div className='inicioFinalDiv'>
          <h1 style={{ color: 'white', fontWeight:'bold'}}>Burla a la competencia con nuestras campañas</h1>
          <h5 style={{ color: 'white' }}>Obtén mas trafico. Adquirí mas clientes. Vende mas productos. Bunima trabaja con todo tipo de negocios</h5>
          <Link to={'/contacto'}>
            <Button className='bComprar'>Contactanos</Button>
          </Link>
        </div>
      </div>
      <Contacto/>
      <div className='inicioPreg'>
        <p className='inicioSub'>Listo para crecer con una agencia digital de marketing? Consigue tu propuesta gratis hoy:</p>
        <h3 style={{color: 'grey'}}>Nuestra agencia digital se encargo personalmente de obtener las mejores campañas de marketing digital utilizadas por los mejores empresas, negocios y emprendimientos. Pedí hoy tu estrategia gratis y se parte de la nueva generación.</h3>
        <p className='inicioSub'>Anuncios que llegan a nada?</p>
        <p style={{color: 'grey'}}>De los problemas mas comunes, sin embargo es tan fácil como saber administrar los anuncios con buenas imágenes y palabras claves</p>
        <p className='inicioSub'>Logos feos y aburridos?</p>
        <p style={{color: 'grey'}}>Algo tan simple pero a la vez importante a la hora de crecer tu negocio, tener un logo personalizado es algo esencial como una pagina web.</p>
        <p className='inicioSub' id='Servicios'>Paginas web poco profesional?</p>
        <p style={{color: 'grey'}}>Nos especializamos en crear paginas profesionales ya sean para tiendas o paginas corporativas personalizadas.</p>
      </div>
      <div className='inicioIcons row'>
      <div className="col">
        <img src={MG} alt="" />
        <h4 style={{ color: 'rgb(7, 13, 89)'}}>ADMINISTRACION DE ANUNCIOS</h4>
        <p>Anuncios 100% dedicados a tu tipo de negocio y para atracción de posibles clientes</p>
      </div>
      <div className='col'>
        <img src={LD} alt="" />
        <h4 style={{ color: 'rgb(7, 13, 89)'}}>DISEÑO DE LOGO</h4>
        <p>Logos personalizados a cada pedido</p>
      </div>
      <div className="col">
        <img src={DW} alt="" />
        <h4 style={{ color: 'rgb(7, 13, 89)'}}>DISEÑO WEB</h4>
        <p>Paginas web o Landing page personalizados a cada pedido</p>
      </div>
      </div>
      <div className='imagenDosDiv' style={{
        backgroundImage: `url(${IF})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        width: 'auto'
    }} >
        <h1 className='imagenDos'>Nos preocupamos por cada cliente</h1>
        <p style={{ color: '#ffffff'}}>Creamos un ambiente seguro en la que el cliente sienta que cualquier cosa que necesite pueda pedirlo,  nosotros nos ocupamos y brindar el mejor servicio posible</p>
        <Link to={'/contacto'}>
          <Button className='bComprar'> Contactanos</Button>
        </Link>
      </div>
      
    </>
  )
}
