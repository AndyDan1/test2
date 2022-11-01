import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
//toBeInTheDocument метод проверки есть в документе
//toHaveStyle проверки есть стиль у елемента
// ____
//fireEvent для работы с событиями искуственное событие
//userEvent не работает с конкретніми событиями а воспроизводит действия пользователя

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App/>);
    //screen для получения елементу .метод как именно найти
    //getByText найти по тексту
    const helloWorldElem = screen.getByText(/hello world/i);// /регулярка игнорирующая регистр/i
    // поиск по роли role=''
    const btn = screen.getByRole('button');
    //getByPlaceholderText найти по плейсхолдеру
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot()
  });

  // screen имеет методы findBy findAll getBy getAll queryBy queryAll
  // find возвращает обьект завернутій в промис(файнд для асинхронного кода)
  //findAll возвращает массив елементов
  //findBy возвращает один елемент
  // ___________
  //get найти, возвращает обьект
  // get 100% должен найти елемент если ненайден ошибка
  //__________
  // query убеждаемся в том что какогото елемента нет
  // если елемент не получим переменная равна НАЛ и ошибки не будет
  // queryBy доказательство отсутствия елементов
  test('async tests + contain style', async () => {
    render(<App/>);
    // const helloWorldElem = screen.queryByText(/hello2/i)
    // expect(helloWorldElem).toBeNull()
    const helloWorldElem = await screen.findByText(/text/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'})

  });

  //tests with button click elem hide and show
  test('button tests', () => {
    render(<App/>)
    //find btn byTestId
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    // fireEvent for listen click
    fireEvent.click(btn)
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  // toContainHTML - содержит HTML
  //input - слушатель для инпута 1) testing input 2) params
  test('input tests', () => {
    render(<App/>)
    const input = screen.getByPlaceholderText(/input value/i)
    const title = screen.getByTestId('title')
    expect(title).toContainHTML('')
    fireEvent.input(input, {
      target: {value: '123123'}
    })
    //userEvent не работает с конкретніми событиями а воспроизводит действия пользователя
    // userEvent.type(input, '123123')
    expect(title).toContainHTML('123123')
  })
})



