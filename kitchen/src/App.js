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
import { GeneralWrapper, GlobalStyle } from "./components/global/Global";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


Sentry.init({
  dsn: "https://90dec976f42549c1bb3a05fd703a404d@o1413157.ingest.sentry.io/6752807",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <>
      <GlobalStyle />
      <GeneralWrapper>
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
      </GeneralWrapper>
    </>
  );
}

export default App;
