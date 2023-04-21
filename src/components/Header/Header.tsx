import { useNavigate } from "react-router-dom";
import { A, Container, HeaderCont, Home, List, Nav, Red } from "./style";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderCont>
      <Nav>
        <List>
          <div>
            <li>
              <Home
                onClick={() => {
                  navigate("/");
                }}
              >
                <Red>EX</Red>CELSIOR
              </Home>
            </li>
          </div>
          <Container>
            <li>
              <A
                onClick={() => {
                  navigate("/contatti");
                }}
              >
                Contattaci
              </A>
            </li>
            <li>
              <A
                onClick={() => {
                  navigate("/prodotto");
                }}
              >
                Il nostro metodo
              </A>
            </li>
          </Container>
        </List>
      </Nav>
    </HeaderCont>
  );
};
