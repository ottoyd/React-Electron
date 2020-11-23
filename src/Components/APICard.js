import React from 'react';

const APICard = (props) => {

  function color(data) {
    if (data.TotalConfirmed > 2047563) {
      return (
        <div style={{border: 'red 2px solid', padding: '5px', margin: '15px' }}>
          <p>Country : {data.Country}</p>
          <p>New Confirmed : {data.NewConfirmed}</p>
          <p>Total Confirmed : {data.TotalConfirmed}</p>
        </div>
      )
    } else {
      return (
        <div style={{border: 'lightblue 2px solid', padding: '5px', margin: '15px' }}>
          <p>Country : {data.Country}</p>
          <p>New Confirmed : {data.NewConfirmed}</p>
          <p>Total Confirmed : {data.TotalConfirmed}</p>
        </div>
      )
    }
  }
  return (
    <div>
      {color(props.x)}
    </div>
  );
}

export default APICard;
