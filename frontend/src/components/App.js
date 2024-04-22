import React from 'react';
import "../static/css/App.css"
import Header from "./header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./main/Main";
import Swagger from "./swagger/Swagger";

export default function App() {
    return (
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/swagger' element={<Swagger/>}/>
        </Routes>
      </>
    )
}
