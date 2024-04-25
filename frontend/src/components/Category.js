import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import '../static/css/Main.css';
import axios from "axios";


export default () => {
  const location = useLocation();
  const categoryName = location.state.categoryName;
  const params = useParams()
  const [recipesToShow, setRecipesToShow] = useState([]);

  useEffect(() => {

    axios.get(
      `http://localhost:8000/api/recipes/?category=${params.id}`
    ).then((res) => {
      if (res.status === 200) {
        setRecipesToShow(res.data);
      }
    }).catch((err) => {
      console.debug('axios error');
      console.debug(err);
    });
  }, []);

  return (
    <main id='category'>
      <h1>Доступные рецепты в категории {categoryName}</h1>
      <div className='container'>
        {recipesToShow.length > 0 ? recipesToShow.map(
            (data) => <Link to={String(data.id)} key={data.id}>{data.name}</Link>
          ) :
          <h2>Еще не добавлен ни один рецепт</h2>
        }
      </div>
    </main>
  )
}