import Chef from "./components/chef/Chef";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Special from "./components/special/Special";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Gallery from "./components/gallery/Gallery";
import Video from "./components/video/Video";
import Awards from "./components/awards/Awards";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Special />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
