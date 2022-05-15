import { screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { Card } from "."

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
describe("Card", () => {
  it("render the item", async () => {
    render(<Card {...props} />)

    expect(
      screen.getByRole("heading", { name: props.name }),
    ).toBeInTheDocument()

    expect(screen.getByText("10")).toBeInTheDocument()
  })
})
