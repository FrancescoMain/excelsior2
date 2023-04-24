import { SubmitHandler, useForm } from "react-hook-form";
import { UiInput } from "../../UI/UiInput/UiInput";
import { IFormInput } from "./type";
import { Container, H1, Img, LeftBox, RightBox } from "./style";
import { Button } from "../Home/components/Hero/style";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  //<------DATA
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  let SendForm: boolean = false;

  const navigate = useNavigate();

  //<------BUSINESS LOGIC
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    axios
      .post(
        "https://sheet.best/api/sheets/3771ab79-8944-47a3-80b3-a7376d260787",
        data
      )
      .then((reponse) => {
        console.log(reponse);
        SendForm = true;
        navigate("/grazie");
      });

  return (
    <Img>
      <Container>
        <LeftBox>
          <HomeIcon sx={{ fontSize: 100 }} />

          <H1>
            Scopri le opzioni di gestione personalizzate per la tua casa
            vacanze!
          </H1>
          <p>
            Compila il nostro form per ricevere maggiori informazioni sulle
            opzioni di gestione personalizzate per la tua casa vacanze. Siamo
            qui per aiutarti a trovare la soluzione perfetta per le tue
            esigenze, dalla gestione completa alla gestione parziale. Lasciaci i
            tuoi dati e saremo felici di contattarti per discutere le opzioni e
            offrirti un servizio su misura.
          </p>
        </LeftBox>
        <RightBox>
          <h2>COMPILA IL FORM</h2>
          <p>Verrai ricontattato il prima possibile</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UiInput
              type="text"
              errors={errors.nome}
              register={register("nome", {
                required: true,
              })}
              errorMessage={{
                required: "Questo campo è richiesto",
              }}
              label="Nome"
              id="nome"
            />
            <UiInput
              type="text"
              errors={errors.cognome}
              register={register("cognome", {
                required: true,
              })}
              errorMessage={{
                required: "Questo campo è richiesto",
              }}
              label="Cognome"
              id="cognome"
            />
            <UiInput
              type="email"
              errors={errors.email}
              register={register("email", {
                required: true,
              })}
              errorMessage={{
                required: "Questo campo è richiesto",
              }}
              label="Email"
              id="email"
            />
            <UiInput
              type="number"
              errors={errors.phone}
              register={register("phone", {
                required: true,
                minLength: 9,
              })}
              errorMessage={{
                required: "Questo campo è richiesto",
                minLength: "Inserire un numero valido",
              }}
              label="Cellulare"
              id="phone"
            />

            <Button>INVIA</Button>
          </form>
        </RightBox>
      </Container>
    </Img>
  );
};
