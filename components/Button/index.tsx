import { ButtonHTMLAttributes, ReactNode } from "react"
import * as S from "./styles"
type TButtonProps = {
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: TButtonProps): JSX.Element {
  return (
    <S.ButtonWrapper {...props}>
      {!!children && children}
      <button></button>
    </S.ButtonWrapper>
  )
}
