import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../static/css/Main.css';
import {Link} from "react-router-dom";


export default () => {
  const [categoriesToShow, setCategoriesToShow] = useState([]);

  useEffect(() => {

    axios.get(
      'http://localhost:8000/api/categories/'
    ).then((res) => {
      if (res.status === 200) {
        setCategoriesToShow(res.data);
      }
    }).catch((err) => {
      console.debug('axios error');
      console.debug(err);
    });

  }, []);

  return(
    <main id='main'>
      <h1>Доступные категории</h1>

      <div className='container'>
        {}
        {categoriesToShow.length > 0 ? categoriesToShow.map(
          (data) => <Link
            to={String(data.id)}
            key={data.id}
            state={{ categoryName: data.name }}
          >
            {data.name}
          </Link>
        ) :
        <h2>Нет ни одной доступной категории</h2>
        }
      </div>
    </main>
  )
}