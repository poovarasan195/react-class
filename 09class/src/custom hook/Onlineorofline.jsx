import { useEffect, useState } from "react"


export const Onlineorofline = ()=>{
      const [isonline, setisonline] = useState(true)

      useEffect(()=>{
          window.addEventListener('online', ()=>{setisonline(true)})
          window.addEventListener('offline', ()=>{setisonline(false)})

          return ()=>{
            window.removeEventListener('online' , ()=>{})
            window.removeEventListener('offline' , ()=>{})
           }

      },[])

      return isonline;
}
