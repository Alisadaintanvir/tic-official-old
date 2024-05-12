import React from 'react';
import { API } from '../config';

const categoryApi = () => {
  const getCategori = ()=>{
    return fetch(`${API}/categories.json`)
    .then(res=>
        {
            console.log(res)
            return res.json()
        }
    )
  }
  return {getCategori}
};

export default categoryApi;