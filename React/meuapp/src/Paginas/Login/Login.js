import React from 'react'
import { Link } from "react-router-dom";
import { Loginstyle } from './loginStyle';
import Footer from '../../Componentes/Footer/footer_comp';


export default function Login() {
   return (
   <Loginstyle>
      <form>
      <div className='divDeus'>
         <div className='divTitulo'>
            <h2>Faça Seu Login</h2>
         </div>
         <div className='box'>
            <div className='Acessar'>
               <h1>Acessar Sistema</h1>
            </div>
            <div className='inputdiv'>
               <div className='inputbox'>
                  <label className='labelinput'>Login:</label>
                  <input type="text" id="login" className='input' name="login" placeholder="Informe seu Login" autocomplete="off" />
               </div>
               <div className='inputbox'>
                  <label className='labelinput'>Senha:</label>
                  <input type="text" id="senha" className='input' name="senha" placeholder="Informe sua Senha" autocomplete="off" />
               </div>
               <div className='divbotao'>
                  <button type='button' className='btn-cadastro'>Entrar</button>
               </div>
               <div className='semCadastro'>
               <Link to={{ pathname: "/Cadastro"}}>Crie seu Cadastro</Link>
               </div>
            </div>
         </div>
      </div>
   </form>
   <Footer />
   </Loginstyle>
   )
}
