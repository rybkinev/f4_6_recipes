import React from 'react';
import "../static/css/App.css"
import Header from "./Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Main from "./Main";
import Swagger from "./Swagger";
import NotFound from "./NotFound";
import Category from "./CategoryList";
import Recipes from "./Recipe";

export default function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path='/home' >
          <Route index element={<Main />} />
          <Route path=':id' >
            <Route index element={<Category />} />
            <Route path=':id' element={<Recipes />} />
          </Route>
        </Route>
        <Route path='/swagger' element={<Swagger />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
