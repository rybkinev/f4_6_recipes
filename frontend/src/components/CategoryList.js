import React from 'react';
import {Link, useParams} from "react-router-dom";


export default () => {
  const params = useParams()

  console.debug(params);

  return (
    <>
      <h1>Category</h1>
      <h2>Recipes List</h2>
      <Link to='1'>Recipe</Link>
    </>
  )
}