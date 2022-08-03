import styled from 'styled-components';

export const Cadastrostyle = styled.div`
*{
   margin: 0;
   padding: 0;
}   

.divpai{
   margin: 0px;
   padding: 0;
   max-width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 10rem;
}

.boxx{
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 37rem;
   width: 28rem;
   border: 1px solid #202024;
   background: #202024;
   margin-right: 3rem;
   box-shadow: 0px 9px 5px purple;
}

.Criar{
   color: #fff;
   font-size: 15px;
   font-family: system-ui;
   margin-top: 1rem;
   margin-right: 12rem;
}

.divinput{
   display: flex;
   flex-direction: column;
   margin-right: 0;
}

.boxinput{
   margin: 6px;
}

.inputlabel{
   padding: 4px;
   font-size: 20px;
   font-family: system-ui;
   display: -ms-grid;
   display: grid;
   -ms-flex-pack: start;
   justify-content: start;
   margin-left: -4px;
}

.inputt{
   outline: none;
   padding-left: 6px;
   width: 24rem;
   height: 29px;
   border: none;
   color: #fff;
   background: #0C0C0D;
   font-size: 17px;
}

.inputt:focus{
   box-shadow: 0px 8px 20px -5px  purple;
   
}

.divbotao{
   margin-top: 3rem;
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

.divmensagem{
   color: #fff;
   margin-right: 3rem;
   margin-top: 11rem;
   font-size: 24px;
   font-family: system-ui;
}

a{
   text-decoration: none;
   color: #fff;
}
`