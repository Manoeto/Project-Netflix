import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'




export default function NavBar(){
    return  <nav className="Navbar"> 
    <div className="Logo"><Link to='/'>Logo</Link>
        
    </div>
    <ul className="NavList">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tv-shows'>Tv Shows</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
    </ul>
        </nav>
}