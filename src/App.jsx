import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
