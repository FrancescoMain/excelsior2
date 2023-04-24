import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import "./app.css";
import { Main } from "./style";
import { ProductInfo } from "./pages/Home/components/ProductInfo/ProductInfo";
import { Form } from "./pages/Form/Form";
import { Ringraziamenti } from "./pages/Ringraziamenti/Ringraziamenti";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/excelsior2" element={<Home />} />
            <Route path="/prodotto" element={<ProductInfo />} />
            <Route path="/contatti" element={<Form />} />
            <Route path="/grazie" element={<Ringraziamenti />} />
            <Route path="/pasqualino98" element={<Dashboard />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
