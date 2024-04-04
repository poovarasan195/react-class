import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
   const [data , setdata] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/poovarasan195').then((responce)=>responce.json()).then(data =>{
            setdata(data)
        })
     },[])   //this is one normal way 

  return (
    <div>
         <h1> user name:{data.login}</h1>
         <img src={data.avatar_url} width={300} alt="logo" />
    </div>
  )
}

export default Github

// export const githubloder = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/poovarasan195');
//     if (!response.ok) {
//       throw new Error('Failed to fetch GitHub data');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching GitHub data:', error);
//     return null; 
//   }
// };   this is next way


