import { useNavigate } from "react-router-dom";
import { Img } from "../Form/style";
import { Button } from "../Home/components/Hero/style";
import { Container } from "./style";

export const Ringraziamenti = () => {
  const navigate = useNavigate();

  return (
    <Img>
      <Container>
        <h1>GRAZIE</h1>
        <p>
          Mentre aspetti di essere contattato dai uno sguardo al nostro metodo.
        </p>
        <Button onClick={() => navigate("/excelsior2")}>
          Il Nostro Metodo
        </Button>
      </Container>
    </Img>
  );
};
