import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiT3R0b3lkIEdhdXRoaWVyIiwicG9zaXRpb24iOiJDRU8iLCJpYXQiOjE2MDYxMDA2NjZ9.O9WJu_P3amgfq-q7a1Qp0IOxqTgeLTZzkd1zWeYb1ZA

const Bycrpt = () => {
  function verifyToken (token) {
    console.log('masukkkkkkkkkkk')
    console.log(jwt.verify(token, 'yadigituin'))
    return jwt.verify(token, 'yadigituin');
  }

  const [token, setToken] = useState('');
  const [result, setResult] = useState('');

  return (
    <div>
      <p>{JSON.stringify(token)}</p>
      <input onChange={e => setToken(e.target.value)}/>
      <button onClick={e => setResult(verifyToken(token))}> Verify </button>
      <p>{JSON.stringify(result)}</p>
    </div>
  );
}

export default Bycrpt;
