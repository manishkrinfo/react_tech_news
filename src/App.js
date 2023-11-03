import React from 'react'
import Search from './Search';
import Stories from './Stories';
import Pagination from './Pagination';
import { useGlobalContext } from './context';

const App = () => {
  const parentData = useGlobalContext();
  console.log(parentData);
  return (
    <>
      <div>Welcome to App</div>
      <Search />
      <Stories />
      <Pagination />
    </>
  )
}
export default App;