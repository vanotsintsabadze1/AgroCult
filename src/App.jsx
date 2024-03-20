import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
