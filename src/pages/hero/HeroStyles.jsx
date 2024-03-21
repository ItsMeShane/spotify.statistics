import styled from 'styled-components';

export const HeroContainer = styled.div`
   background-color: #121212;
   color: #efefef;
   width: 100vw;
   height: 100vh;
   padding: 80px 20px;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const ContentBox = styled.div`
   background-color: #222222;
   box-shadow: 0 0 70px #222222;
   color: #ffffff;
   width: fit-content;
   height: 80%;
   max-height: 600px;
   max-width:450px;
   padding: 80px 20px;
   text-align: center;
   border-radius: 50px;
   display:flex;
   flex-direction:column;
   align-items:center;
`;

export const Title = styled.h1`
   font-size: 2.8rem;
   margin-bottom: 20px;
   flex:1;
`;

export const Subtitle = styled.p`
   font-size: 1.5rem;
   margin-bottom: 40px;
   flex:2;
`;

export const Button = styled.a`
   background-color: #333333;
   background-image: linear-gradient(to bottom right, #1b5600, #1ed760);
   color: #000000;
   padding: 15px 30px;
   border-radius: 25px;
   font-size: 1.2rem;
   text-decoration: none;
   position: relative;
   width:fit-content;
   margin-bottom:50px;


   &:active {
      background-clip: padding-box;
      background-image: linear-gradient(to bottom right, #1ed760, #1b5600);

      &::after {
         content: '';
         position: absolute;
         top: -5px;
         left: -5px;
         right: -5px;
         bottom: -5px;
         border: 2px solid #ffffff;
         border-radius: 28px;
         pointer-events: none;
      }
   }
`;
