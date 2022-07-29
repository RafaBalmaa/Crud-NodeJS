import styled from 'styled-components';

export const Loginstyle = styled.div`
*{
   margin: 0;
   padding: 0;
}

.divDeus{
   display: flex;
   justify-content: space-around;
   margin-top: 17rem;
   margin-right: 34rem;
}

.divTitulo{
   color: #fff;
   margin-left: 41rem;
   margin-top: 11rem;
   font-size: 24px;
   font-family: system-ui;
   
}

.box{
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 25rem;
   width: 20rem;
   border: 1px solid #202024;
   background: #202024;
   box-shadow: 0px 9px 5px purple;
}

.Acessar{
   color: #fff;
   font-size: 15px;
   font-family: system-ui;
   margin-top: 1rem;
   margin-right: 1rem;
   margin-bottom: 2rem;
}

.inputbox{
   margin: 6px;
}

.inputdiv{
   display: flex;
   flex-direction: column;
   margin-right: 0;
}

.labelinput{
   padding: 4px;
   font-size: 20px;
   font-family: system-ui;
   display: -ms-grid;
   display: grid;
   -ms-flex-pack: start;
   justify-content: start;
   margin-left: -4px;
}

.input{
   outline: none;
   padding-left: 6px;
   width: 17rem;
   height: 34px;
   border: none;
   color: #fff;
   background: #0C0C0D;
   font-size: 17px;
}

.btn-cadastro{
   border-radius: 4px;
   width: 7rem;
   height: 32px;
   border: none;
   background: #3C3C3E;
   color: #fff;
   cursor: pointer;
   text-decoration: none;
}

.divbotao{
   margin-top: 7rem;
   margin-left: 5rem
}

a{
   text-decoration: none;
   color: #fff;
}
`