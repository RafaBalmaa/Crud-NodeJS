import React from 'react'
import { Headerstyle } from './header_style'

export default function Headers() {
   return (
         <Headerstyle>
            <header className='headerstyle'>
               <div className='headerPai'>
                  <img className='imgKMB'src='https://logodownload.org/wp-content/uploads/2017/11/kabum-logo-2.png' alt='logoKaBuM!'></img>
                  <div className='labeluser'>
                     <label>Usuario</label>
                  </div>
               </div>
            </header>
         </Headerstyle>
   )
}
