import { Content, Sidebar, PageWrapper } from "./styled/Wrappers";

export const Layout = () => {
  return (
    <>
      <header>header</header>
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
