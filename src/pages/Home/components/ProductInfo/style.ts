import styled from 'styled-components'

export const Img = styled.div`
    min-height: 600px;
    background-image: url(https://raw.githubusercontent.com/FrancescoMain/excelsior2/master/public/assets/productCurvyLines.png);
    background-size: cover;
    width: 100%;
    background-color: #fff5f8;
    
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 100px;
    padding: 0 80px;
    @media (max-width: 1050px) {
        flex-wrap: wrap;
        margin-top: 80px;

    }

    @media (max-width: 768px) {
        padding: 0  20px;
    }
  

`;

export const Card = styled.div`
    width: calc(100% / 3 - 130px);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    margin-top: 40px;
    @media (max-width: 1050px) {
        width: calc(100%);
        padding: 0  120px;
        min-height: 0;
        text-align: center;

    }

    @media (max-width: 768px) {
        padding: 0  60px;

    }

    @media (max-width: 600px) {
        padding: 0  30px;
    }

    @media (max-width: 380px) {
        padding: 0  0px;

    } 
    
`;

export const Title = styled.div`
    font-weight: 800;
    margin-top: 20px;
    font-size: 19px;

 
    height: 30px;
    margin-bottom: 60px;
`;

export const Subitle = styled.div`
    
    margin-top: 30px;
    font-size: 20px;
    color: dimgray;
    
`;

export const Wrap = styled.div`
    
    display: flex;

`;

export const ButtonContainer = styled.div`
    
    display: flex;
    justify-content: center;

`;




