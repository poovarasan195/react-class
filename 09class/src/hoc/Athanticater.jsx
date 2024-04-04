import React from 'react'


const user = true;

export  function Authenticator(Value) {
    return function (){
      if (!user) {
        return <p>The user is not authenticated.</p>;
      }
      return <Value />;
    };

  }
  