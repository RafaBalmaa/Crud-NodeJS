import React from 'react'
// import { Link } from 'react-router-dom';
import { Errorstyle } from './errorstyle';
import Footer from '../../Componentes/Footer/footer_comp';


export default function Acesso() {
   return (
      <Errorstyle>
         <div className='Mensagemerro'>
            <h1>Opa, Encontramos um erro!</h1>
            <h2>Ja estamos resolvendo, espere um minuto!</h2>
         </div>
         <img src='https://www.freepnglogos.com/uploads/workers-png/workers-handyman-services-all-american-retrofit-repair-28.png' alt='concertando' />
         <Footer />
      </Errorstyle>
   )
}
