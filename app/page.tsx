import { ThemeProvider, AppContainer, Navbar, Hero } from "../components";

const Page = () => (
    <ThemeProvider>
        <AppContainer>
            <Navbar />
            <Hero />
        </AppContainer>
  </ThemeProvider>
);

export default Page;