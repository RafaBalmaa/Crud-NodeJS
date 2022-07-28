import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Footer/footer_comp';
import { Loginstyle } from './loginStyle';


export default function Login() {
   return (
   <Loginstyle>
      <div>
         <h2 class="titulo">Faça Seu Login</h2>
         <div class="box">
            <div class="title">
               <h1>Acessar Sistema</h1>
            </div>
            <div class="inputbox">
               <label class="labelinput">Login:</label>
               <input type="text" id="login" class="input" name="login" placeholder="Informe seu Login" autocomplete="off" />
            </div>
            <div class="inputbox">
               <label class="labelinput">Senha:</label>
               <input type="text" id="senha" class="input" name="senha" placeholder="Informe sua Senha" autocomplete="off" />
            </div>
            <div class="inputbox">
               <button value="entrar" id="entrar" name="entrar"><Link to={{ pathname: "/Acesso"}}>Acesso</Link></button>
            </div>
            <div class="cadastro">
            <Link to={{ pathname: "/Cadastro"}}>Nao tem Cadastro</Link>
            </div>
            </div>
            <Footer/>
      </div>
   </Loginstyle>
   )
}
