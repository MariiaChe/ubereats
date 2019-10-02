import React, { Component } from 'react';
import './ScrollingNavbar.css'
import Supermarket from '../supermarket.json'


class ScrollingNavbar extends Component{
    render(){
        return(
            <div className="container">
            <nav className="menu-wrapper">
              <ul className="menu">
               <li><a href="#">Leches</a></li>
               <li><a href="#">Quesos</a></li>
               <li><a href="#">Mantequillas</a></li>
               <li><a href="#">Cremas</a></li>
              </ul>
            </nav>
            </div>
            )
    }
} 
export default ScrollingNavbar