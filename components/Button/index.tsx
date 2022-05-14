import { ButtonHTMLAttributes, ReactNode } from "react"
import * as S from "./styles"

export function Button({
  children,
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <S.ButtonWrapper disabled={disabled} {...props}>
      {!!children && children}
    </S.ButtonWrapper>
  )
}
