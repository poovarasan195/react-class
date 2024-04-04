import React, { useEffect, useState } from 'react'
import Api from './api';

export default function Fetch() {
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          const jsonData = await response.json();
          setData(jsonData.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  
    return (
      <div>
         {data.length === 0 ? 'Loading...' : <Api data={data} />}
      </div>
    );
  }