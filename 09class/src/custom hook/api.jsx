import React from 'react'

function Api({ data }) {


    if (!Array.isArray(data)) {
        return <p>No data available</p>;
      }

  return (
    <div>
      {data && data.map((property) => (
        <div key={property.id}>
          <h1>{property.title}</h1>
          <img src={property.images[0]} alt='not show' />
          <p>{property.description}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Api;