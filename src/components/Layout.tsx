import { Navbar } from "./Navbar";

import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <footer></footer>
    </>
  );
};
