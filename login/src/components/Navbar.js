// use rfc -> react functional component navbar 
// how to import this in App.js ? --> in App.js write <Navbar/>
// the Navbar.js from components will be imported 


import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Interviews</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Hiring</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                    {/* <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/"></a></li>
                        <li><a className="dropdown-item" href="/"></a></li>
                        
                    </ul> }
                    </li> */}
                    
                
                </ul>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Sign Up</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/"> | Sign In </a>
                        </li>			
                    </ul>		  
                </div>
            </div>
        </div>
    </nav>

  )
}
