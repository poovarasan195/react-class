
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import React from 'react'

// const reactelement = (
//    <a href="https://google.com">click</a>
// )    foundation

 const reactelement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click to google'
 )

ReactDOM.createRoot(document.getElementById('root')).render(

  reactelement

)
