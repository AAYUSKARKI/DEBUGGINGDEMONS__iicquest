import React from 'react'

function HomePage() {
  return (
   <>
   <div className='navbar flex '>
    <div className='logo' >Logo</div>
    <ul className='flex m-auto'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us </a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Collaborators</a></li>
    </ul>
                                  ,,,             
   </div>
   <div className="create-todolist">
    {/* you can addd image about the importance of todo items */}
    <p>Information about todo which user create </p>
    <button>Create a todo list items</button>
   </div>
   <div className="dailytask">
  <p>It is given by app owner and changed daily...</p>
   </div>
  
  <div className="appointment">
    <p>get appointment of doctors</p>
  </div>
  <div className="chat-group">
    <p>In this group they chat with other members</p>
  </div>

   </>
  )
}

export default HomePage