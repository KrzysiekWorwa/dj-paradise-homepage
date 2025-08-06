import { ParallaxProvider } from "react-scroll-parallax";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import { images } from "./components/Gallery/images";


function App() {
  return (
    <ParallaxProvider>
      <NavigationBar />
      <Hero />
      <Content />
      <Gallery images={images} />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
