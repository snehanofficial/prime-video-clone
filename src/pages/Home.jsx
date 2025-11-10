import React from 'react'
import bg1 from '../assets/images/bg-1.jpg'

function Home() {
  return (
    <>
    <div>
      <img src={bg1} alt="" className='' />
      <div>
        <h1>Welcome to Prime Video</h1>
        <span>
          Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals
        </span>
        <div><a href="" className='bg-white text-black p-5'>Sign in to join Prime</a></div>
      </div>
    </div>
    
    </>
  )
}

export default Home