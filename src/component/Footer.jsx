// implement footer componenet
import React from 'react'

const Footer = () => {
  return (
    <>
   
<footer
  className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white container mx-auto pt-4 animate-pulse">
  <div className="container pt-9  bg-gray-400 grid grid-cols-3 gap-8 text-justify px-2 ">
  
    <div className="mb-6 flex justify-center space-x-2 text-white">

   
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque impedit ea delectus, voluptate ducimus temporibus excepturi! Consequuntur, in sit sint fugiat exercitationem itaque explicabo vero. Autem quisquam tempora voluptas!
      </div>
      <div className="mb-6 flex justify-center space-x-2 text-white">
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque impedit ea delectus, voluptate ducimus temporibus excepturi! Consequuntur, in sit sint fugiat exercitationem itaque explicabo vero. Autem quisquam tempora voluptas!
            </div>
            <div className="mb-6 flex justify-center space-x-2 text-white">
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque impedit ea delectus, voluptate ducimus temporibus excepturi! Consequuntur, in sit sint fugiat exercitationem itaque explicabo vero. Autem quisquam tempora voluptas!
            </div>
  </div>

  {/* <!--Copyright section--> */}
  <div className="w-full bg-black/5 p-4 text-center">
    © 2023 Copyright:
    <a href="https://tw-elements.com/">TW Elements</a>
  </div>
</footer>
       
</>
)
}

export default Footer