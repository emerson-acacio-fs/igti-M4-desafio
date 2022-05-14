import styled from "styled-components"

export const ButtonWrapper = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.border.radius};
`
