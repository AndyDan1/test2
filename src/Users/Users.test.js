import {
  logDOM,
  render,
  screen
} from '@testing-library/react';
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "../page/UserDetailsPage";
import AppRouter from "../router/AppRouter";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios')

describe('UserTestAsync', () => {
  let responce
  beforeEach(() => {
    responce = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
        }
      ]
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders 1234', async () => {
    axios.get.mockReturnValue(responce)
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Users/>
      </MemoryRouter>
    )
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })
  test('click and rout another page', async () => {
    axios.get.mockReturnValue(responce)
    render(
      // <MemoryRouter>
      //   {/*<Routes>*/}
      //   {/*  <Route path={'/users'} element={<Users/>}/>*/}
      //   {/*  <Route path={'/users/:id'} element={<UserDetailsPage/>}/>*/}
      //   {/*</Routes>*/}
      //   <AppRouter/>
      //   <Users/>
      //   <UserDetailsPage/>
      // </MemoryRouter>
      renderWithRouter(<UserDetailsPage/>, '/users')
    )
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })
})
