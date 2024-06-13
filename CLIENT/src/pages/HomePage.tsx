
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function HomePage() {
  return (
   <>
   <section className=' flex flex-col gap-6 bg-black h-[100vh] justify-center '>
   <div className='flex  mx-auto gap-12'>
  <div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4 ' >
       <div className='flex flex-col gap-3 '>
        <h1 className='mx-auto font-bold text-2xl'>Appointment</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
        <Link to={"/appointment"} className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></Link>

       </div>
    </div>

    <div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4' >
       <div className='flex flex-col gap-3 '>
        <h1 className='mx-auto font-bold text-2xl'>Daily Task</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
        <Link to={"/dailytask"} className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></Link>

       </div>
    </div>
  </div>

  <div className='flex  mx-auto gap-12'>

<div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4 ' >
     <div className='flex flex-col gap-3 '>
      <h1 className='mx-auto font-bold text-2xl'>Discussion Form</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
      <button className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'><Link to={"/message"}>Explore </Link>< FaArrowCircleRight className='text-2xl'/></button>

     </div>
  </div>

  <div className='flex justify-center items-center max-w-md  bg-white rounded-xl shadow-md w-[500px] h-96 p-4' >
     <div className='flex flex-col gap-3 '>
      <h1 className='mx-auto font-bold text-2xl'></h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates! Aliquam, quasi.</p><br />
      <Link to={"/mcq"} className='flex  gap-3 mx-auto w-24  bg-slate-800 p-2 rounded-md text-white'>Explore < FaArrowCircleRight className='text-2xl'/></Link>

     </div>
  </div>
</div>

{/* chat section linked */}
<div className="container ">
<Link to={"/chat"} ><IoChatbubbleEllipsesOutline  className="text-black ml-auto text-8xl mr-7 bg-white p-3 rounded-md font-bold"/>
</Link>
</div>
    
    </section>  

 

   </>
  )
}

export default HomePage
