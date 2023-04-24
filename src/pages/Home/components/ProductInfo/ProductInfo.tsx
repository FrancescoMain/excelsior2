import {
  ButtonContainer,
  Card,
  Container,
  TitleContainer,
  Img,
  Subitle,
  Title,
  Wrap,
} from "./style";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupsIcon from "@mui/icons-material/Groups";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Button, Line } from "../Hero/style";
import { useNavigate } from "react-router-dom";

export const ProductInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <Img>
        <Wrap>
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
                case vacanze che garantisce risultati sopra la media. Scopri
                come possiamo aiutarti a massimizzare i tuoi guadagni e a
                offrire un'esperienza indimenticabile ai tuoi ospiti.
              </Subitle>
            </Card>
            <Card>
              <AttachMoneyIcon sx={{ fontSize: 100 }} />
              <Title>
                MASSIMIZZA I TUOI GUADAGNI CON LE NOSTRE STRATEGIE DI MERCATO
              </Title>
              <Subitle>
                Grazie alla nostra conoscenza approfondita del mercato, siamo in
                grado di applicare strategie ben definite per massimizzare i
                tuoi guadagni. Scopri come possiamo aiutarti a ottenere il
                massimo dalla tua casa vacanze e a superare la concorrenza.
              </Subitle>
            </Card>
          </Container>
        </Wrap>
      </Img>
      <Img>
        <TitleContainer>
          <h1>COME FUNZIONA</h1>
          <Line />
        </TitleContainer>
        <Wrap>
          <Container>
            <Card>
              <Title>1.</Title>
              <GroupsIcon sx={{ fontSize: 100 }} />
              <Subitle>
                Colloquio iniziale: In questa fase discutiamo insieme le tue
                esigenze e definiamo la durata e il tipo di collaborazione che
                meglio si adatta alle tue necessità.
              </Subitle>
            </Card>
            <Card>
              <Title>2.</Title>
              <EngineeringIcon sx={{ fontSize: 100 }} />
              <Subitle>
                Implementazione: Una volta definiti i dettagli della
                collaborazione, ci occupiamo di implementare le strategie e le
                soluzioni personalizzate per la gestione della tua casa vacanze.
                Ci assicuriamo che tutto sia pronto per accogliere gli ospiti e
                offrire loro un'esperienza indimenticabile.
              </Subitle>
            </Card>
            <Card>
              <Title>3. </Title>
              <AutoGraphIcon sx={{ fontSize: 100 }} />
              <Subitle>
                Monitoraggio e ottimizzazione: Dopo l'implementazione,
                monitoriamo costantemente la performance e apportiamo eventuali
                ottimizzazioni per massimizzare i guadagni e migliorare
                l'esperienza degli ospiti. Ci assicuriamo che il cliente sia
                sempre aggiornato sulla performance e che sia soddisfatto dei
                risultati ottenuti.
              </Subitle>
            </Card>
          </Container>
        </Wrap>
        <ButtonContainer>
          <Button onClick={() => navigate("/contatti")}>COMPILA IL FORM</Button>
        </ButtonContainer>
      </Img>
    </>
  );
};
