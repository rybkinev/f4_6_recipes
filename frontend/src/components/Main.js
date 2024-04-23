import React, {useEffect} from 'react';
import axios from "axios";


export default function Main() {
  useEffect(() => {

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