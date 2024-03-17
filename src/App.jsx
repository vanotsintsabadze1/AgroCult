import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Hero-Page/Hero-Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import ItemsWrapper from "./components/Hero-Page/Hero-Top-Sellers/ItemsWrapper";
import SearchBar from "./components/Search-Bar/SearchBar";

function App() {
  return (
    <>
      <Header />

      <main className="flex w-full flex-col items-center gap-[3rem] p-[4rem_0] lg:gap-[5rem] lg:p-[8rem_0]">
        <SearchBar />
        <Introduction />
        <ItemsWrapper />
      </main>

      <Footer />
    </>
  );
}

export default App;
