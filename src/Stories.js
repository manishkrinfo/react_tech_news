import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Stories = () => {
   const {hits, nbPage, isLoading} = useGlobalContext();
   if(isLoading) {
      return <>
         Loading ...
      </>
   }
   
  return (
   <>
      <div className='stories-div'>
         {hits.map((curPost)=>{
            const { title, author, objectID, url, num_comments } = curPost;
            return (
               <div className='card' key={objectID}>
                  <h2>{title}</h2>
                  <p>
                     By <span>{author}</span> | <span>{num_comments}</span> comments
                  </p>
                  <div className='card-button'>
                     <a href={url} target="_blank">Read More</a>
                     <a href="#">Remove</a>
                  </div>
               </div>
            )
         })}
      </div>
   </>
  )
}

export default Stories;