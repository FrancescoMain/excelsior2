import { useRef } from "react";
import { Box, Button, Container, Line, P, Title, Icon } from "./style";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Hero = () => {
  const ref = useRef<any>(null);

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
        <Button>COMPILA IL FORM</Button>
        <span>Raccontaci le tue esigenze</span>
        <Icon onClick={handleClick} onTouchStart={handleClick}>
          <ArrowDownwardIcon />
        </Icon>
      </Box>
      <div ref={ref} />
    </>
  );
};
