import styled from "styled-components";

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.mgrey};
  //margin-top: 2.5rem;
`;

export const StyledPHeading = styled(StyledP)`
  font-size: 1.2rem;
  font-weight: normal;
`;

export const StyledPItalic = styled(StyledP)`
  font-style: italic;
  color: ${({ theme }) => theme.colors.morange};
`;
