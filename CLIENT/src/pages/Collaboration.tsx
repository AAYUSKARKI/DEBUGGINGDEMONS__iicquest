import React from 'react'

import image from '../../../imgs/health.png'
import image1 from '../../../imgs/img2.png'


function Collaboration() {
  return (
    <div className=' flex flex-col gap-5 h-[100vh] bg-black text-white'>
      <div className='flex my-3'>
        <h1 className='mx-auto text-3xl font-bold'>Collaboration with Differerent organization</h1>
      </div>
     
      <hr />
{/* imgages */}
      <div className='flex justify-evenly'>
       <div className='w-[600px]'>
        <img src={image} alt="Photo" className='h-48' />
        <h1 className='p-6 text-2xl'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorum magnam totam doloribus, vero consequatur?.</h1>
       </div>

       <div className='w-[600px]'>
        <img src={image1} alt="Photo" className='h-48' />
        <h1 className='p-6 text-2xl'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorum magnam totam doloribus, vero consequatur?.</h1>
       </div>

      </div>
      <hr />

      <div className='flex'>
        <h2 className= 'flex  flex-col justify-center items-center gap-4 mx-auto'>
          <p className='text-4xl font-bold '>INgo</p>
          <p className='text-7xl font-bold '>Collaboration</p>
        </h2>
      </div>

    
    </div>
  )
}

export default Collaboration