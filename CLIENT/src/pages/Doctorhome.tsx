
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import Messagecontainer from './Messagecontainer'

function Home() {

    const {user} = useSelector((state:any)=>state.user)
  return (
    <>
<div className='flex flex-col h-[100vh] bg-black' >
<div className='bg-slate-700 w-full'>
    <div className='flex items-center justify-center'>
        <h1 className='text-3xl text-white'>WELCOME {user ? user.username:""}</h1>
    </div>
</div>
<div className='flex items-center '>
<Sidebar />
<Messagecontainer  />
</div>
</div>
    </>
  )
}

export default Home