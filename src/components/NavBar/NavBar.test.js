import {render, screen} from "@testing-library/react";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";


//Для каждой ссілки отдельній тест
describe('links', () => {
  test('mainLink', () => {
    render(renderWithRouter(<NavBar/>))
    const mainLink = screen.getByTestId('main-link')
    userEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
  test('aboutLink', () => {
    render(renderWithRouter(<NavBar/>))
    const aboutLink = screen.getByTestId('about-link')
    userEvent.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
  })
  test('usersLink', () => {
    render(renderWithRouter(<NavBar/>))
    const usersLink = screen.getByTestId('users-link')
    userEvent.click(usersLink)
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
  })
})