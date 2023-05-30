import { Layout } from "./components/Layout";
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    morange: "#dd6e42",
    mgrey: "#f5efed",
    mblack: "#000000",
    bkgblue: "#001d3d",
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout></Layout>
      </>
    </ThemeProvider>
  );
};
