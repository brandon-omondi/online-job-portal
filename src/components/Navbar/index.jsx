import React from 'react'

function Navbar() {
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    // Nav Container
    
      <div className='h-20 flex text-white w-full items-center'>
          {/* Logo */}
          <div className='w-1/4 text-3xl pl-20 font-bold'>Nairobi.GO</div>
          <div className='flex w-3/4 items-start'>
            {/* LogOut Button */}
              <button className='text-blue-500 bg-white rounded-md border border-blue-500 w-1/6' onClick={logout}>Logout</button>
          </div>

      </div>
    
  )
}

export default Navbar