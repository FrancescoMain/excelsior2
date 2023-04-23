import styled from 'styled-components'
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";

export const HeaderCont = styled.header`
    background-color: #28282a;
    height: 100px;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 2;
    color: white;
    margin: 0;
`;

export const Nav = styled.nav `
    height: 100%;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0;
    padding: 0 80px;
    @media (max-width: 768px) {
    padding: 0 20px;
    }
`;

export const Home = styled.a`
    font-size: 40px;
    cursor: pointer;
    &:hover {
        color: #ff3366;
        transition: 1s;
    }
`;

export const Red = styled.span`
    color: #ff3366;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    gap: 30px;
    @media (max-width: 768px) {
    display: none;
    }
`;

export const A = styled.a`
    cursor: pointer;
    padding: 80px 0;
    &:hover {
        color: #ff3366;
        transition: 1s;
    }
    @media (max-width: 768px) {
    padding: 0;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    @media (max-width: 768px) {
    display: block;
    }
`;

export const MyMenuIcon = styled(MenuIcon)`
    color: white;
`;

export const MyButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;

`;

export const MyMenu = styled(Menu)`
    z-index: 3;
`;

