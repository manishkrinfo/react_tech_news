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
      <h2>My Tech New Post</h2>
      {hits.map((curPost)=>{
         return (
            <h2>{curPost.title}</h2>
         )
      })}
   </>
  )
}

export default Stories;