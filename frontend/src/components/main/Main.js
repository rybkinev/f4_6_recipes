import React, {useEffect} from 'react';
import axios from "axios";


export default function Main() {
  useEffect(() => {
  //   fetch(
  //     'http://localhost:8000/api/recipes/',
  //     {
  //       mode: 'no-cors',
  //       method: 'GET',
  //     }
  //   )
  // .then(response => {
  //   console.debug(response)
  //   if (response.ok) {
  //     response.json()
  //   }
  // })
  // .then((data) => {
  //   console.log(data)
  // });

    axios.get(
      'http://localhost:8000/api/recipes/'
    ).then((res) => {
      if (res.status === 200) {
        console.debug(res.data);
      }
    }).catch((err) => {
      console.debug('axios error');
      console.debug(err);
    });

  }, []);
  return(
    <>
      <h1>Hello</h1>
    </>
  )
}