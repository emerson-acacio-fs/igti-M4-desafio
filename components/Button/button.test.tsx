import { screen } from "@testing-library/react"
import { render } from "helpers/testHelper"
import { Button } from "components/Button"
import { theme } from "styles/theme"

describe("Button", () => {
  it("renders a button", () => {
    render(<Button>Página Anterior</Button>)

    const button = screen.getByRole("button", {
      name: /Página Anterior/i,
    })

    expect(button).toBeInTheDocument()
  })

  it("renders with background color white", () => {
    render(<Button>Página Anterior</Button>)

    const button = screen.getByRole("button", {
      name: /Página Anterior/i,
    })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.white,
      border: `0.1rem solid ${theme.colors.black}`,
    })
  })
})
