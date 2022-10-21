import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='d-flex justify-content-center flex-column text-white p-3 fondoFooter'>
        <div className='p-1'>Redes</div>
        <div className='p-1'>
            <a href="#" target='_blank' className='anchor' rel='noreferrer'>
            <i className="bi bi-instagram"></i>
            </a>
            <a href="#" target='_blank' className='anchor' rel='noreferrer'>
            <i className="bi bi-facebook"></i>
            </a>
        </div>
        <div className='p-1'>© Copyright: ... - 2022. Todos los derechos reservados.</div>
    </div>
  )
}
