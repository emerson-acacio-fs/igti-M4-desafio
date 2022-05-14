import { ButtonHTMLAttributes } from "react"
import styled, { css } from "styled-components"

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    padding: 1rem;
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.black};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  `}
`
