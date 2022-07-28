import React from 'react'
import { Link } from "react-router-dom";
import { Cadastrostyle } from './cadastrostyle'

export default function Cadastro() {
   return (
      <Cadastrostyle>
      <div className='divpai'>
         <div className='divmensagem'>
               <h2>Faça agora seu Cadastro,<br/>para entrar em nosso site</h2>
            </div>
         <div className='boxx'>
            <div className='Criar'>
               <h1>Crie sua Conta</h1>
            </div>
            <div className='divinput'>
               <div className='boxinput'>
                  <label className='inputlabel'>Login:</label>
                  <input type='text' id='login' className='inputt' name='login' placeholder='Seu Login' autoComplete='off'/>
               </div>
               <div className='boxinput'>
                  <label className='inputlabel'>Email:</label>
                  <input type='email' id='email' className='inputt' name='email' placeholder='Seu Email' autoComplete='off' />
               </div>
               <div className='boxinput'>
                  <label className='inputlabel'>Senha:</label>
                  <input type='password' id='senha' className='inputt' name='senha' placeholder='Sua Senha' autoComplete='off' />
               </div>
               <div className='boxinput'>
                  <label className='inputlabel'>Telefone:</label>
                  <input type='tel' id='telefone' className='inputt' name='telefone' placeholder='Seu Telefone' autoComplete='off' />
               </div>
               <div className='boxinput'>
                  <label className='inputlabel'>Cep:</label>
                  <input type='text' id='cep' className='inputt' name='cep' placeholder='Seu Cep' autoComplete='off' />
               </div>
               </div>
               <div className='divbotao'>
                  <button type='button' className='btn-cadastro'><Link to={{ pathname: "/"}}>Cadastrar</Link></button>
               </div>
         </div>
      </div>   
      </Cadastrostyle>
   )
}
