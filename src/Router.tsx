import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <About></About>, index: true },
      { path: "/projects", element: <Projects></Projects> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);
