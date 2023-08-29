import styled from "styled-components";

export const NavListItem = styled.li`
  &:hover {
    color: ${({ theme }) => theme.colors.morange};
    cursor: pointer;
  }
`;
