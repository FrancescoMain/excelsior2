import styled from 'styled-components'

export const Container = styled.div`
    min-height: 600px;
    background-image: url(https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -120px;
    background-size: cover;
    filter: sepia(10%);
    filter: brightness(0.5); 
    @media (max-width: 1050px) {
        background-position-y: 0px;
        min-height: 500px;



    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100px;
    width: 100%;
    color: white;
`;

export const Title = styled.h1`
    margin-top: 90px;
    font-size: 50px;
    backdrop-filter:none;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 1050px) {
        margin-top: 40px;


    }
    @media (max-width: 600px) {
        font-size: 30px;


    }
`;

export const Line = styled.div`
    width: 80px;
    border: 2px #ff3366 solid;
    @keyframes slideInFromLeft {
  0% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(0);
  }
  
    }
    animation: 1s ease-out 0s 1 slideInFromLeft;
`;

export const P = styled.p`
    margin-top: 80px;
    font-size: 20px;
    text-shadow: 1px 1px 2px grey;
    text-align: center;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        margin-top: 40px;
        font-size: 17px;
    }

    @media (max-width: 1050px) {
        margin-top: 40px;
    }

    @media (max-width: 600px) {
        font-size: 13px;
    }
`;

export const Button = styled.button`
    margin: 40px 0 20px 0;
    font-size: 16px;
    color: white;
    padding: 20px 35px;
    background-color: #ff3366;
    border: none;
    &:hover{
        background-color: #e62958;
        transition: 0.5s;
    }
`;

export const Icon = styled.div`
    margin-top: 85px;
    border: 1px white solid;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        color: #e62958;
        transition: 0.5s;
        border: 1px #e62958 solid;

    }

    @keyframes slideTopToBottom {
    0% {
    transform: translatey(-300%);
     }
    80% {
    transform: translatey(+50%);
    }
  
    }
    animation: 0.5s ease-out 0s 1 slideTopToBottom;

    @media (max-width: 1050px) {
        margin-top: 40px;
    }

    @media (max-width: 768px) {
        margin-top: 60px;
    }
    @media (max-width: 380px) {
    } 
`;