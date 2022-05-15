import { screen } from "@testing-library/react"
import { AxiosResponse } from "axios"
import { ICardProps } from "components/Card"
import { render } from "helpers/testHelper"

import Home from "pages/index"

const data = [
  {
    id: "binance",
    name: "Binance",
    year_established: 2017,
    country: "Cayman Islands",
    description: "",
    url: "https://www.binance.com/",
    image:
      "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 1,
    trade_volume_24h_btc: 553787.0000654742,
    trade_volume_24h_btc_normalized: 553787.0000654742,
  },
  {
    id: "ftx_spot",
    name: "FTX",
    year_established: 2019,
    country: "Antigua and Barbuda",
    description: "",
    url: "https://ftx.com/",
    image:
      "https://assets.coingecko.com/markets/images/451/small/F.png?1609051590",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 2,
    trade_volume_24h_btc: 70994.93892455281,
    trade_volume_24h_btc_normalized: 70994.93892455281,
  },
  {
    id: "qqqqqee",
    name: "Coinbase Exchange",
    year_established: 2012,
    country: "United States",
    description: "",
    url: "https://www.coinbase.com",
    image:
      "https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 3,
    trade_volume_24h_btc: 61394.25804514702,
    trade_volume_24h_btc_normalized: 61394.25804514702,
  },
]

jest.mock("server/client", () => {
  return {
    client: {
      get: jest.fn(() => Promise.resolve({ data })),
    },
  }
})

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />)

    const title = await screen.findByText("Binance")

    expect(title).toBeInTheDocument()
  })
})
