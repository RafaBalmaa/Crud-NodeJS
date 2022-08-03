import styled from "styled-components";


export const Kabumstyle = styled.div`
   body{
      background-image: linear-gradient(to right, #0000FF, #FF4500);
   }

   main {
   margin: auto;
   min-width: 300px;
   max-width: 1000px;
   background-color: #fff;
   padding: 27px;
   box-shadow: 0px 0px 63px 5px rgb(0 0 0 / 67%);
   color: #000;
   }

   main p{
      margin: none;
      text-align: inline;
      text-indent: 30px;
      line-height: 2em;
      font-size: 20px;
      padding: none;
      margin-bottom: 15px;
      font-family: sans-serif;
   }

   main h1{
      color: #f04000;
      font-family: sans-serif;
      padding: 50px;
      margin-bottom: none;
      margin: auto;
      font-size: 30px;
      padding-top: 0rem;
   }
   
   main h2{
      font-family: sans-serif;
      color: #f74f0c;
      font-size: 30px;
      background-image: linear-gradient(to right, #cc5b2e transparent);
      text-indent: 8px;
      text-align: start;
      margin-top: none;
      padding: 50px;
      padding-top: 3rem;
      padding-bottom: 0;
   }

   b{
      color: #f74f0c ;
      font-size: 25px;
   }

   main img{
      width: 100%;
   }

   .Huskyimg{
      width: 95%;
   }

   .Kabumimg{
      width: 105%;
      margin-left: -25px;
      height: 31rem;
   }

   details {

   position: absolute;
   margin-top: -5rem;
   }

   summary {
   writing-mode: vertical-lr;
   text-align: center;
   padding: 12px 10px;
   width: 23px;
   height: 17px;
   background-color: #dcdcdc;
   border: 2px solid #555555;
   border-radius: 4px;
   color: #555555;
   cursor: pointer;
   user-select: none;
   outline: none;
   transition: transform 200ms ease-in-out 0s;
   margin-top: 4rem;
   }

   summary::before,
   summary::after {
   top: 0;
   }

   summary::before {
   content: "";
   }

   summary::after {
   content: "III";
   letter-spacing: -1px;
   }
   
   summary:hover {
   transform: scale(1.1);
   }

   summary::marker {
   font-size: 0;
   }

   summary::-webkit-details-marker {
   display: none;
   }

   details[open] .menu {
   animation-name: menuAnim;
   margin-left: 3rem;
   }

   details[open] summary::before {
   content: "X";
   }

   details[open] summary::after {
   content: "";
   }

   .menu {
   height: 0;
   width: fit-content;
   border-radius: 4px;
   background-color: #dcdcdc;
   box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
   margin-top: -6px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   overflow: hidden;
   animation: closeMenu 300ms ease-in-out forwards;
   }

   .menu a {
   padding: 12px 24px;
   margin: 0 16px;
   color: #555555;
   border-bottom: 2px solid rgba(0, 0, 0, 0.1);
   text-decoration: none;
   text-align: center;
   transition: filter 200ms linear 0s;
   }

   .menu a:nth-of-type(1) {
   padding-top: 24px;
   }

   .menu a:nth-last-of-type(1) {
   border-bottom: none;
   }

   .menu a:hover {
   filter: brightness(200%);
   }

   details::before {
   content: ".";
   color: #555555;
   margin-left: 80px;
   padding: 10px 10px;
   opacity: 0.4;
   
   }
   details[open]::before {
   animation: fadeMe 300ms linear forwards;
   }

   @keyframes menuAnim {
   0% {
      height: 0;
   }
   100% {
      height: 14rem;
   }
   }

   @keyframes fadeMe {
   0% {
      opacity: 0.4;
   }
   100% {
      opacity: 0;
   }
   }


`