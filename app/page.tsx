import { ThemeProvider, AppContainer, Navbar, Hero } from "../components";
import { About } from "../components/About";
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
    </AppContainer>
  </ThemeProvider>
);

export default Page;
