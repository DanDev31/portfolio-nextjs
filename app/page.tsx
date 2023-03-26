import { ThemeProvider, AppContainer, Navbar, Hero } from "../components";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

const Page = () => (
  <ThemeProvider>
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

export default Page;
