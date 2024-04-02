import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-full h-screen flex flex-wrap bg-cover bg-no-repeat justify-center items-center' style={{backgroundImage: `url("https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>

  </div>
  )
}

export default App
