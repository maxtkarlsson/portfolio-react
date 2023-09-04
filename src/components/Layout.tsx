import {
  Content,
  Sidebar,
  PageWrapper,
  TempNav,
  HeaderWrapper,
} from "./styled/Wrappers";

export const Layout = () => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <TempNav></TempNav>
        </HeaderWrapper>
      </header>
      <main>
        main
        <PageWrapper>
          <Sidebar>Sidebar</Sidebar>
          <Content>Content</Content>
        </PageWrapper>
      </main>
      <footer>footer</footer>
    </>
  );
};
