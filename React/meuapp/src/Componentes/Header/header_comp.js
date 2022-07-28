import React from 'react'
import { Header } from './header_style'

export default function Headers() {
   return (
      <div>
         <Header>
            <header className='headerstyle'>
               <div className='kabum'>
                  <div>
                     <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/71/KaBuM%21_Logo2015.png' alt='Logo KaBuM!'></img>
                  </div>
                  <div className='login'>
                     <p class='usuarioLogin'> Ola, Usuario</p>
                  </div>
               </div>
            </header>
         </Header>
      </div>
   )
}
