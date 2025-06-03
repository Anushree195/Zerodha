import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';

function HomePage () {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/allHoldings`)
      .then(res => setHoldings(res.data))
      .catch(err => console.error(err));
  }, []);

  return ( 
    <>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>

      <section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h2>Your Holdings</h2>
        {holdings.length === 0 ? (
          <p>Loading holdings...</p>
        ) : (
          <ul>
            {holdings.map((item, idx) => (
              <li key={idx}>
                <strong>{item.name}</strong> - Qty: {item.qty} - Price: {item.price}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default HomePage;
