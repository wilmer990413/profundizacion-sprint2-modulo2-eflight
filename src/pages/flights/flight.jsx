import React from 'react'
import { Link } from 'react-router-dom'
import relojDuration from '../../../public/relojDuration.png';
import maleta from '../../../public/maleta.png';
import transito from '../../../public/transito.png';
import avion from '../../../public/avion.png';

function Flight({flight, action}) {
    const fechaInicio = new Date(flight.fecha_salida);
    const fechaFin = new Date(flight.fecha_llegada);
    const diferenciaEnMilisegundos = fechaFin - fechaInicio;
    const segundos = Math.floor(diferenciaEnMilisegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    const horaInicio = fechaInicio.getHours();
    const minutosInicio = fechaInicio.getMinutes();
    const horaFin = fechaFin.getHours();
    const minutosFin = fechaFin.getMinutes();
    return (
        <div className='flights__content--item'>
            <img src={flight.imagen_empresa} alt="Empresa"/>
            <div className='flights__content--time'>
                <p>{flight.nombre_empresa}</p>
                <p className='flights__content--time--duration'><img src={maleta}/>{flight.peso_equipaje}</p>
            </div>
            <div className='flights__content--time'>
                <p>{`${horaInicio}:${minutosInicio}${horaInicio>=12? 'PM':'AM'} - ${horaFin}:${minutosFin}${horaFin>=12? 'PM':'AM'}`}</p>
                <p className='flights__content--time--duration'><img src={relojDuration} alt="" />{`${horas} hr ${minutosRestantes} min`}</p>
            </div>
            <div className='flights__content--transito'>
                <img src={transito}/>
                <div>
                    <img src={avion}/>
                    <p>{parseInt(flight.transitos)=== 0? 'Direct' : `${flight.transitos} stop`}</p>
                </div>
            </div>
            <div className='flights__content--price'>
                <div>
                    <p>{flight.detalles_precio.precio} COP</p>
                    <span>/ pax</span>
                </div>
                <Link className='flights__content--price--button' to='/profundizacion-sprint2-modulo2-eflight/MyBooking'><span onClick={() => action(flight)}>Choose</span></Link>
            </div>
        </div>
    )

}

export default Flight