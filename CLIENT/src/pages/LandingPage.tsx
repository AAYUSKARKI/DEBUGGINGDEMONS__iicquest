import { useState,useEffect } from "react"
import axios from "axios"

function LandingPage() {

  const [fact, setFact] = useState([] as any)

  const getFacts = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/v1/quotes/allquotes");
      const allFacts = res.data.data;
      // Select a random fact from the array
      const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
      setFact(randomFact);
    } catch (error) {
      console.error("Error fetching facts:", error);
    }
  };

  useEffect(() => {
    getFacts()
  }, [])

  return (
    <section className='h-[100vh] flex justify-center bg-black text-white '>
        <div className='flex flex-col gap-5 justify-center items-center'>
        <p className="text-3xl font-bold">"{fact.quote}"</p>
        <p className="text-xl font-semibold text-green-400">- {fact.author}</p>
            <div className='flex  gap-2'>
                <button className='bg-white text-black p-2 rounded-md w-60 font-bold  hover:bg-slate-400'>Get started</button>
                <button className='bg-slate-700  text-white p-2 rounded-md w-32 font-bold  hover:bg-slate-800'>view plans</button>
            </div>

        </div>
    </section>
  )
}

export default LandingPage