import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import "./Layout.scss";

export const Layout = () => {
  return (
    <>
      <header className="header-container">
        <Navbar></Navbar>
      </header>
      <main className="main-container">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
