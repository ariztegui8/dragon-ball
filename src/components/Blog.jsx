import React from 'react'
import characters from '../characters.json'

const Blog = () => {
  return (
    <>
         <div className='container-blog'>
          {characters.map(e =>(
              <img className='col-4' src={e.img} alt="img" />
          ))}
         </div>
    </>
  )
}

export default Blog