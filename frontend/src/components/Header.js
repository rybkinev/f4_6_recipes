import React from 'react';
import '../static/css/Header.css'
import {NavLink} from "react-router-dom";


export default () => {
  return(
    <header id='header'>
      <div className='brand'>
        <h1>Книга рецептов</h1>
      </div>
      <nav>
        <NavLink to='/home' > Home </NavLink>

        <NavLink to='/swagger' > Swagger </NavLink>
      </nav>
    </header>
  )
}
