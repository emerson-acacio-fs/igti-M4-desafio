import { Button } from "components/Button"
import { Card, ICardProps } from "components/Card"
import type { NextPage } from "next"
import { useState } from "react"
import { client } from "server/client"
import { HeaderWrapper, ListWrapper, Main } from "styles/styles"
import useSWR from "swr"
const props = {
  id: "binance",
  name: "Binance",
  year_established: 2017,
  country: "Cayman Islands",
  image:
    "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
  trust_score: 10,
  trade_volume_24h_btc: 696912.4079626404,
}

const Home: NextPage = () => {
  const [page, setPage] = useState(1)
  const { data } = useSWR(
    `/exchanges/?per_page=100&page=${page}`,
    async (args) => {
      try {
        const { data } = await client.get<ICardProps[]>(args)
        return data
      } catch (err) {
        console.error(err)
        return []
      }
    },
  )
  if (!data) {
    return <div>loading...</div>
  }
  console.log(data)
  return (
    <Main>
      <HeaderWrapper>
        <Button
          disabled={page === 1}
          onClick={() => {
            if (page > 1) {
              setPage((old) => old - 1)
            }
          }}
        >
          Página Anterior
        </Button>
        <Button
          onClick={() => {
            setPage((old) => old + 1)
          }}
        >
          Próxima Página
        </Button>
      </HeaderWrapper>
      <ListWrapper>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ListWrapper>
    </Main>
  )
}

export default Home
