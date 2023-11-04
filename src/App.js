import React from 'react'
import Search from './Search';
import Stories from './Stories';
import Pagination from './Pagination';
import './App.css'

const App = () => {
  return (
    <>
      <Search />
      <Stories />
      <Pagination />
    </>
  )
}
export default App;