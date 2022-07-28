import styled from 'styled-components';

export const Loginstyle = styled.div`
body{
   background: #121214;
   color: #fff;
}

.input{
   background: #0C0C0D;
   outline: none;
   border-radius: 5px;
   border: none;
   height: 29px;
   display: -ms-flexbox;
   display: flex;
   -ms-flex-direction: column;
   flex-direction: column;
   margin: 1rem;
   width: 19rem;
   margin-left: 28px;
   padding: 3px;
   color: #fff;
   padding-left:7px ;
}

.input:focus{
   box-shadow: 0px 8px 20px -5px  purple;
}
.labelinput{
   font-size:20px ;
   font-family: system-ui;
}

.box{
   position: absolute;
   top: 50%;
   left: 50%;
   -ms-transform: translate(-50%, -50%);
   transform: translate(0rem, -50%);
   text-align: center;
   clear: both;
   height: 27rem;
   border: 1px solid #202024;
   background-color: #202024;
   width: 23rem;
   font-size: 15px;
   font-family: system-ui;
   box-shadow: 0px 9px 5px purple;

}

#entrar{
   border: none;
   background: #3C3C3E;
   width: 76px;
   height: 42px;
   border-radius: 16px;
   color: #fff;
   margin-top: 1rem;
}

h1{
   margin-top: 36px;
}

.titulo{
   font-size: 4rem;
   font-family: system-ui;
   margin-top: 22rem;
   margin-left: 23rem;
   text-shadow: 0px 0px 6px #361637;
}

a{
   text-decoration: none;
   color: #fff;
}

.cadastro{
   margin-top: 19px;
}
`