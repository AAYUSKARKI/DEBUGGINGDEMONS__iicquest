
import { FaArrowCircleRight } from "react-icons/fa";

function HomePage() {
  return (
   <>
  
   <section className=' flex flex-col gap-6 bg-black h-[100vh] justify-center '>
  <div className='flex  mx-auto gap-12'>

  <div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4 ' >
       <div className='flex flex-col gap-3 '>
        <h1 className='mx-auto font-bold text-2xl'>To Do List</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
        <button className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></button>

       </div>
    </div>

    <div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4' >
       <div className='flex flex-col gap-3 '>
        <h1 className='mx-auto font-bold text-2xl'>Daily Task</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
        <button className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></button>

       </div>
    </div>
  </div>

  <div className='flex  mx-auto gap-12'>

<div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4 ' >
     <div className='flex flex-col gap-3 '>
      <h1 className='mx-auto font-bold text-2xl'>Discussion Form</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
      <button className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></button>

     </div>
  </div>

  <div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4' >
     <div className='flex flex-col gap-3 '>
      <h1 className='mx-auto font-bold text-2xl'>MCQ</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
      <button className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></button>

     </div>
  </div>
</div>
    
    </section>  

 

   </>
  )
}

export default HomePage
