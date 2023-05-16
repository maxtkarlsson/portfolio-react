//import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import "./Layout.scss";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Layout = () => {
  return (
    <>
      <header className="header-container">
        <Navbar></Navbar>
      </header>
      <main className="main-container">
        {/* <Outlet></Outlet> */}
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <footer></footer>
    </>
  );
};
