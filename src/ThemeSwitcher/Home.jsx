import React, { useContext } from 'react'
import { data } from 'react-router-dom'
import { Data } from '../App';

const Home = () => {
    const {Theme,ThemeHandler}=useContext(Data)
    console.log(Theme , ThemeHandler);
    
  return (
    <div>
          <h1 style={{height:"900px",backgroundColor:Theme==="light"?"black":"white"}}>This is home page</h1> 
    </div>
  )
}

export default Home