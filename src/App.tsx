import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import "./app.css";
import { Main } from "./style";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
