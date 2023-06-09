import { useRef } from "react";
import { Box, Button, Container, Line, P, Title, Icon } from "./style";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const ref = useRef<any>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Container />
      <Box>
        <Title>LIBERA IL TUO TEMPO!</Title>
        <Line />
        <P>
          Crea un'esperienza indimenticabile per i tuoi ospiti. <br /> Affidati
          alla nostra esperienza di host per la gestione della tua struttura
        </P>
        <Button onClick={() => navigate("/contatti")}>COMPILA IL FORM</Button>
        <span>Raccontaci le tue esigenze</span>
        <div ref={ref} />
        <Icon onClick={handleClick} onTouchStart={handleClick}>
          <ArrowDownwardIcon />
        </Icon>
      </Box>
    </>
  );
};
