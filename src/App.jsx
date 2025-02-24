import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './ThemeSwitcher/Navbar'
import Routing from './ThemeSwitcher/Routing'


export const Data=createContext()

function App() {
  const [Theme, setTheme] = useState("Dark") 
  const ThemeHandler=()=>{
    setTheme((prevTheme)=>
        prevTheme==="light"?"dark":"light"
    )
  }
  // console.log(data);
  
  return (
    <>
      <Data.Provider value={{Theme,ThemeHandler}} >
        <Navbar/>
        <Routing />
      </Data.Provider>
    </>
  )
}

export default App
