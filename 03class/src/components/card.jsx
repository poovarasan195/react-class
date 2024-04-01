// import React from 'react';

 function card({username ="poovi" , department="not define the place", img="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}) {  // tis is the better aprouch and its scalabel 

  return (
    <div>
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-4">
        <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src={img} alt="img" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, nesciunt.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {/* {username || "poovi"}   tis is work but not scalabel */}
      {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
       {department}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default card
