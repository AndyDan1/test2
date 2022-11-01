// import './App.css';
// import {useEffect, useState} from "react";
//
// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')
//   const onClick = () => setToggle(!toggle)
//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])
//   return (
//     <div className="App">
//       <h1 data-testid={'title'}>{value}</h1>
//       {toggle === true && <div data-testid={"toggle-elem"}>toggle</div>}
//       {data && <div style={{color: 'red'}}>text data</div>}
//       <h1>Hello World!!!</h1>
//       <button data-testid={"toggle-btn"} onClick={onClick}>Click me</button>
//       <input onChange={(e) => setValue(e.target.value)} type="text" placeholder={'input value ...'}/>
//     </div>
//   );
// }
//
// export default App;
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./page/AboutPage";
import MainPage from "./page/MainPage";
import ErrorPage from "./page/ErrorPage";
import Users from "./Users/Users";
import UserDetailsPage from "./page/UserDetailsPage";
import AppRouter from "./router/AppRouter";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
export default App;
