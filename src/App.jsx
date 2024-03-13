import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import BlogsWrapper from "./components/Hero-Blogs/BlogsWrapper";

function App() {
  return (
    <>
      <Header />

      <main className="flex w-full flex-col items-center p-[4rem_0] lg:p-[12rem_0]">
        <Introduction />
        <BlogsWrapper />
      </main>

      <Footer />
    </>
  );
}

export default App;
