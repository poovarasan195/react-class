
import { useState } from 'react'
import './App.css'

function App() {
    const [color , setcolor] = useState('olive')
  return (
    <div className='w-full h-screen text-white duration-200 fixed bottom-0 left-0 flex justify-center' 
    style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12'>
              <div className='flex flex-wrap justify-center gap-3 rounded-3xl bg-white shadow-lg px-3 py-2'>
                    <button className='outline-none px-3 py-1 rounded-2xl bg-red-500'
                    onClick={()=>setcolor('red')}>red</button>
                    <button className='outline-none px-3 py-1 rounded-2xl bg-green-600' 
                    onClick={()=>setcolor('green')}>green</button>
                     <button className='outline-none px-3 py-1 rounded-2xl bg-blue-950'
                    onClick={()=>setcolor('blue')}>blue</button>
                     <button className='outline-none px-3 py-1 rounded-2xl bg-white text-black'
                    onClick={()=>setcolor('white')}>white</button>
                     <button className='outline-none px-3 py-1 rounded-2xl bg-black'
                    onClick={()=>setcolor('black')}>black</button>
              </div>
        </div>
  </div>
  )
}

export default App
