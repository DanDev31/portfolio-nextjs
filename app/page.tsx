import { ThemeProvider, AppContainer, Navbar, Hero } from "../components";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

const Page = () => (
  <ThemeProvider>
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </AppContainer>
  </ThemeProvider>
);

export default Page;
