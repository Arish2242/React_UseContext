import React, { useContext } from 'react'
import { Data } from '../App'

const ThemeSwitch = () => {
    const {Theme,ThemeHandler}=useContext(Data)
    return (
        <div style={{height:"900px",backgroundColor:Theme==="light"?"black":"white"}}>
            <h1>Welome to  the Theme Switcher App!</h1>
            <h3>this is content area the theme is currently light</h3>
       </div>
    )
}

export default ThemeSwitch