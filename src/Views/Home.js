import React, { useState, useEffect } from 'react';
import axios from 'axios'
import APICard from '../Components/APICard'
const compare = require('./../Helpers/compareSort')

const COVID_API_URL = 'https://api.covid19api.com/summary';

const Home = () => {
  useEffect(() => {
    axios.get(COVID_API_URL)
    .then(function (response) {
      setData(response.data.Countries.sort( compare ))
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  const [data, setData] = useState([]);
  return (
    <div>
      THis Is Home
      {data.map(x => <APICard x= {x}/>)}
    </div>
  );
}

export default Home;
