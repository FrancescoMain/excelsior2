import { Box, Button, Container, Line, P, Title, Icon } from "./style";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Hero = () => {
  return (
    <>
      <Container></Container>
      <Box>
        <Title>LIBERA IL TUO TEMPO!</Title>
        <Line />
        <P>
          Crea un'esperienza indimenticabile per i tuoi ospiti: affidati alla
          nostra esperienza di host per la gestione della tua struttura
        </P>
        <Button>COMPILA IL FORM</Button>
        <span>Raccontaci le tue esigenze</span>
        <Icon>
          <ArrowDownwardIcon />
        </Icon>
      </Box>
    </>
  );
};
