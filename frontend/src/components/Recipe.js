import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../static/css/Recipe.css';
import axios from "axios";


export default () => {

  const params = useParams()
  const [recipeToShow, setRecipeToShow] = useState({});

  useEffect(() => {

    axios.get(
      `http://localhost:8000/api/recipes/${params.id}/`
    ).then((res) => {
      if (res.status === 200) {
        setRecipeToShow(res.data);
        console.debug(res.data);
      }
    }).catch((err) => {
      console.debug('axios error');
      console.debug(err);
    });
  }, []);

  return (
    <main id='recipe'>
      {/*<div className='container'>*/}
        {Object.keys(recipeToShow).length > 0 ?
          <>
            <h1>{recipeToShow.name}</h1>
            <span>
              <h4>Описание</h4>
              {recipeToShow.description}
            </span>
            {
              recipeToShow.ingredients.length > 0 ?
                <span className='ingredients'>
                  <h4>Продукты</h4>
                  <ul>
                    {recipeToShow.ingredients.map((data) => <li key={data.id}>{data.name} - {data.weight} г</li>)}
                  </ul>
                </span>
                : <></>
            }

            <span>Примерное время приготовления: {recipeToShow.cook_time} мин.</span>

            <span>
              <h4>Приготовление</h4>
              {recipeToShow.cooking}
            </span>
          </>
          : <h2>Рецепт в процессе наполнения</h2>
        }
      {/*</div>*/}
    </main>
  )
}