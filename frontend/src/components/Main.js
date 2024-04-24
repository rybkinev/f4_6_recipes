import React, {useEffect} from 'react';
import axios from "axios";
import '../static/css/Main.css';
import {Link, Route, Routes} from "react-router-dom";
import Category from "./CategoryList";
import Recipes from "./Recipe";


export default () => {
  useEffect(() => {

    // axios.get(
    //   'http://localhost:8000/api/categories/'
    // ).then((res) => {
    //   if (res.status === 200) {
    //     console.debug(res.data);
    //   }
    // }).catch((err) => {
    //   console.debug('axios error');
    //   console.debug(err);
    // });

  }, []);
  return(
    <>
      <h1>Доступные категории</h1>
      <Link to='1'>1</Link>
      {/*<Category/>*/}
      {/*<Routes>*/}
      {/*  <Route path='/recipes' element={<Recipes />} />*/}
      {/*</Routes>*/}
    </>
  )
}