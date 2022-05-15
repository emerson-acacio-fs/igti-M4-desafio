import Image from "next/image"
import * as S from "./styles"
export interface ICardProps {
  id: string
  name: string
  year_established: number
  country: string
  image: string
  trust_score: number
  trade_volume_24h_btc: number
}
export function Card({
  name,
  image,
  trust_score,
  year_established,
}: ICardProps): JSX.Element {
  return (
    <S.CardWrapper>
      <S.ImgWrapper>
        {image !== "missing_small.png" && (
          <Image src={image} alt={name} width={50} height={50} />
        )}
      </S.ImgWrapper>
      <S.InfoWrapper>
        <h1>{name}</h1>
        <div>{trust_score}</div> <div>{year_established}</div>
      </S.InfoWrapper>
    </S.CardWrapper>
  )
}
