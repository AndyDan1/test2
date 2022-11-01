import App from "./App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

//MemoryRouter для коректной работы роутера
describe('tests router', () => {
  test('1', () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    userEvent.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    userEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
  test('errorPage', () => {
    render(
      <MemoryRouter initialEntries={['/asdasdf']}>
        <App/>
      </MemoryRouter>
    )
    // const mainLink = screen.getByTestId('main-link')
    // const aboutLink = screen.getByTestId('about-link')
    // userEvent.click(aboutLink)
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    // userEvent.click(mainLink)
    // expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
})