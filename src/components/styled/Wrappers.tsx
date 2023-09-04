import styled from "styled-components";

/*TEMP FILLERS*/

export const TempNav = styled.div`
  background-color: coral;
  border: 1px solid black;
  height: 100px;
  width: 100px;
`;

/*------------------------------ */

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: blue;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  //flex-wrap: wrap;
  // skicka in size % och färg som props.
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: left;
    height: 100%;
    width: 41%;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: brown;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: right;
    height: 100%;
    width: 41%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: orange;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: left;
    height: 100%;
    width: 59%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;
