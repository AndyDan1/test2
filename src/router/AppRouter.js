import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../page/MainPage";
import AboutPage from "../page/AboutPage";
import Users from "../Users/Users";
import UserDetailsPage from "../page/UserDetailsPage";
import ErrorPage from "../page/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path={'/about'} element={<AboutPage/>}/>
      <Route path={'/users'} element={<Users/>}/>
      <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
      <Route path={'*'} element={<ErrorPage/>}/>
    </Routes>
  );
};

export default AppRouter;