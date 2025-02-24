import React, { useContext } from 'react'
import Home from './Home'
import { Data } from '../App'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const { Theme, ThemeHandler } = useContext(Data)
    console.log(Theme);
    console.log(ThemeHandler);

    return (
        <div className={`${Theme === "light" ? 'bg-dark' : "bg-light"} `}>
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid">
                    <img src='https://lms.achieversit.com/assets/images/logo.png' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/"  class="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/Theme">
                                    <button className={`${Theme === "light" ? 'btn btn-dark' : "btn btn-light"}`} onClick={ThemeHandler}>Switch to {Theme} Theme</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar