import React from 'react'
import characters from '../characters.json'

const Blog = () => {
  return (
    <>
        {characters.map(e => {
        return(
          <>
        
           <div>
             <img src={e.img} alt="img" />
           </div>

          </>
        )
      })}
    </>
  )
}

export default Blog