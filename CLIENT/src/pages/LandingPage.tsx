import React from 'react'

function LandingPage() {
  return (
    <section className='h-[100vh] flex justify-center bg-black text-white '>
        <div className='flex flex-col gap-5 justify-center items-center'>
            
            <div>
                <p className='text-6xl font-bold '>
                   "I am the Problem for your Health"
                </p>
            </div>
            <div className='flex  gap-2'>
                <button className='bg-white text-black p-2 rounded-md w-60 font-bold  hover:bg-slate-400'>Get started</button>
                <button className='bg-slate-700  text-white p-2 rounded-md w-32 font-bold  hover:bg-slate-800'>view plans</button>
            </div>

        </div>
    </section>
  )
}

export default LandingPage