import styled, { css } from "styled-components";

export const HeaderOut = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark_base);

  section {
    margin: 0 25px;
    display: flex;
    gap: 25px;

    img {
      width: 150px;
      height: 45px;
    }
  }
`;

export const Button = styled.button<{$primary?: boolean}>`
  background-color: transparent;
  color: var(--primary_green);
  font-size: 16px;
  font-weight: 700;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  

  &:hover {
    transform: scale(1.2)
  }

  ${props => props.$primary && css`
      background-color: var(--primary_green);
      border: none;
      color: white
  `}
`;