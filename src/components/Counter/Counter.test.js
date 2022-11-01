import Counter from "./Counter";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";

describe('counter', () => {
  test('btn decrement', () => {
    render(
      <Provider store={createReduxStore()}>
        <Counter/>
      </Provider>
    )
    const decrement = screen.getByTestId('decrement-btn')
    const title = screen.getByTestId('value-title')

    expect(title).toHaveTextContent('0')
    userEvent.click(decrement)
    expect(title).toHaveTextContent('-1')
  })
  test('btn increment', () => {
    const {getByTestId} = render(
      <Provider store={createReduxStore({
        counter: {value: 10}
      })}>
        <Counter/>
      </Provider>
    )
    const increment = getByTestId('increment-btn')
    const decrement = screen.getByTestId('decrement-btn')
    const title = getByTestId('value-title')

    expect(title).toHaveTextContent('10')
    userEvent.click(increment)
    expect(title).toHaveTextContent('11')
  })
})
