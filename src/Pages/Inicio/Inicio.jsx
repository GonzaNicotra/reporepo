import React from 'react';
import './Inicio.css';
import LD from '../../assets/diseñologo.png'
import MG from '../../assets/megafono.png'
import DW from '../../assets/diseñoweb.png'
import IF from '../../assets/inicioFooter.jpeg'
import Ofi from '../../assets/ofi.jpg'
import cliente from '../../assets/clientes.gif'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function Inicio() {

  return (
    <>
      <div className='inicio'>
        <div className='inicioImg'>
          <img className=' imagenOfi' src={Ofi} alt="" />
        </div>
        <div className='inicioDiv'>
          <p style={{ color: 'white', fontWeight:'bold', fontSize:'60px'}}>Descubre nuestra fórmula comprobada para el éxito</p>
          <p style={{ color: 'white' }}>Te mereces ser visto. Estamos acá para lograrlo.</p>
          <Link to={'/contacto'}>
            <Button className='bComprar'>Contactanos</Button>
          </Link>
        </div>
      </div>
      <div className='inicioDivDos'>
        <div className='inicioDivDos__uno'>
          <p style={{fontWeight:'bold', fontSize:'20px'}}>Nuestros Servicios Dedicados</p>
          <p style={{fontWeight:'bold', fontSize:'30px'}}>Brindamos Todos Los Servicios Exclusivos Para Clientes</p>
        </div>
        <div className='inicioDivDos__dos'>
          <p style={{fontSize:'30px', padding:'2rem'}}>Nuestros clientes obtienen Soluciones envés de Propuestas</p>
          <img className='imgCliente' src={cliente} alt="gif" />
        </div>
          <p style={{fontWeight:'bold', fontSize:'30px', marginTop:'4rem', backgroundColor:'#fafbff' }}>Inscríbete con nosotros y obtén tu plan GRATIS para impulsar tu negocio</p>
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
