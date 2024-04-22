import React from 'react';
import '../../static/css/Header.css'
import {Link} from "react-router-dom";


export default () => {
  return(
    <header id='header'>
      <div className='brand'>
        <h1>Книга рецептов</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/swagger'>Swagger</Link>
      </nav>
    </header>
  )
}
