import React from 'react';
import "../static/css/App.css"
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import Swagger from "./Swagger";

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
