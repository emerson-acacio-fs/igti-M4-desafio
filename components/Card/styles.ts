import { ButtonHTMLAttributes } from "react"
import styled, { css } from "styled-components"

export const CardWrapper = styled.li`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 1rem;
    text-decoration: none;
    list-style: none;
    background-color: ${theme.colors.lightGray};
    display: flex;
    padding: 1.5rem;
    column-gap: 1.5rem;
  `}
`

export const InfoWrapper = styled.div``

export const ImgWrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 5rem;
      height: 5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `}
`
