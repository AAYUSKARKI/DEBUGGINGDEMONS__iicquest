import { useState,useEffect } from "react"
import axios from "axios"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"
import logo from "../../../healing.png"
function LandingPage() {

  const [fact, setFact] = useState([] as any)

  const {user} = useSelector((state:any)=>state.user)

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
    <section className='h-[100vh] flex flex-col justify-center bg-black text-white '>
      {/* logo  */}
<div className="flex ">
    <img src={logo} alt="logo" className="mx-auto" />
</div>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <h1 className="text-5xl font-bold">Welcome {user?.username ? user?.username : ""} To Healing Minds</h1>
        <p className="text-3xl font-bold">"{fact.quote}"</p>
        <p className="text-xl font-semibold text-green-400">- {fact.author}</p>
            <div className='flex  gap-2'>
                <Link to={"/login"} className='bg-white text-black p-4 rounded-md w-60 font-bold  text-2xl hover:bg-slate-400'>Get started</Link>
                <Link to={"/subscription"} className='bg-slate-700  text-white p-4 rounded-md w-44 font-bold text-2xl hover:bg-slate-800'>view plans</Link>
            </div>

        </div>
    </section>
  )
}

export default LandingPage