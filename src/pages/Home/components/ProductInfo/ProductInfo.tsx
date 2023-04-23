import { Card, Container, Img, Subitle, Title } from "./style";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const ProductInfo = () => {
  return (
    <>
      <Img>
        <Container>
          <Card>
            <SelfImprovementIcon sx={{ fontSize: 100 }} />
            <Title>FORMULE FLESSIBILI PER TE</Title>
            <Subitle>
              Offriamo soluzioni personalizzate per la gestione della tua casa
              vacanze, adattabili alle tue esigenze. Scegli la formula che
              meglio si adatta a te e lascia che noi ci occupiamo del resto.
            </Subitle>
          </Card>
          <Card>
            <EmojiEventsIcon sx={{ fontSize: 100 }} />
            <Title>IL NOSTRO MODELLO COLLAUDATO</Title>
            <Subitle>
              Abbiamo sviluppato un modello collaudato per la gestione delle
              case vacanze che garantisce risultati sopra la media. Scopri come
              possiamo aiutarti a massimizzare i tuoi guadagni e a offrire
              un'esperienza indimenticabile ai tuoi ospiti.
            </Subitle>
          </Card>
          <Card>
            <AttachMoneyIcon sx={{ fontSize: 100 }} />
            <Title>
              MASSIMIZZA I TUOI GUADAGNI CON LE NOSTRE STRATEGIE DI MERCATO
            </Title>
            <Subitle>
              Grazie alla nostra conoscenza approfondita del mercato, siamo in
              grado di applicare strategie ben definite per massimizzare i tuoi
              guadagni. Scopri come possiamo aiutarti a ottenere il massimo
              dalla tua casa vacanze e a superare la concorrenza.
            </Subitle>
          </Card>
        </Container>
      </Img>
    </>
  );
};
