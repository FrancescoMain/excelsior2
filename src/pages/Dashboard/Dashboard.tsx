import axios from "axios";
import { useEffect } from "react";
import { Main, Side, Tabs, WebApp } from "./style";

export const Dashboard = () => {
  useEffect(() => {
    axios
      .get(
        "https://sheet.best/api/sheets/3771ab79-8944-47a3-80b3-a7376d260787/tabs/Bilancio"
      )
      .then((reponse) => {
        console.log(reponse);
      });
  }, []);
  return (
    <WebApp>
      <Side></Side>
      <Main></Main>
    </WebApp>
  );
};
