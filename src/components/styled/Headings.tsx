import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.morange};
  font-weight: normal;
  font-size: 3rem;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.morange};
  font-weight: normal;
  font-size: 2rem;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.mblack};
  font-weight: normal;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.mblack};
  margin-bottom: 0.3rem;
`;
