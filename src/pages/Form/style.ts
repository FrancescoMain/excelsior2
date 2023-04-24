import styled from 'styled-components'

export const Img = styled.div`
    height:calc( 100vh - 100px);
    background-image: url(https://raw.githubusercontent.com/FrancescoMain/excelsior2/master/public/assets/productCurvyLines.png);
    background-size: cover;
    width: 100%;
    background-color: #fff5f8;
    
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    
`;

export const LeftBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 120px;
 
    
`;

export const RightBox = styled.div`
  width: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
`;

export const H1 = styled.h1`
    margin-top: 60px;
    
`;
