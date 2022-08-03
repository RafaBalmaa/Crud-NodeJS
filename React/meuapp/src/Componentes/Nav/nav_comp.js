import React from 'react'
// import { Link } from "react-router-dom";
import { Navstyle } from './nav_style'

export default function Navs() {
   return (
      <Navstyle>
         <details>
            <summary></summary>
               <nav className='menu'>
                  <a href="/Acesso">Home</a>
                  <a href="/kabum">KaBuM!</a>
                  <a href="/Dev">Criador</a>
                  <a href="/Marcas">Marcas</a>
               </nav>
         </details>
      </Navstyle>
   )
}
