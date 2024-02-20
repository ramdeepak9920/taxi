import React from 'react'

const Navbar = () => {
  return (
    <> 

      <div className="bg-black text-white">
        <div className="p-2 sm:container mx-auto flex justify-between items-center">
             <div className="nav-left ">
                <h1 className="text-3xl">Tax!</h1>
             </div>
             <div className="nav-middle flex items-center">
                <h3 className="p-5">Ride</h3>
                <h3 className="p-5">Drive</h3>
             </div>
             <div className="nav-right">
                <button className="bg-white p-1 text-black rounded-md">Sign up</button>
             </div>
        </div>
      </div>
    
    </>
  )
}

export default Navbar
