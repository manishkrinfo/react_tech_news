import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {
  const {query, searchStories} = useGlobalContext();
  return (
    <>
      <h1>Tech News Website</h1>
      <form onSubmit={ (e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder="Search here.." value={query} onChange={ (e) => searchStories(e.target.value)} />
        </div>
      </form>
    </>
  )
}

export default Search;