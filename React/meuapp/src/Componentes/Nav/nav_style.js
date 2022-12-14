import styled from "styled-components";

export const Navstyle = styled.div`

   details {
   margin: 40px;
   position: absolute;
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
   margin-top: 8px;
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