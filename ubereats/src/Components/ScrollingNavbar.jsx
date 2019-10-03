import React, { Component } from 'react';
import './ScrollingNavbar.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"



class ScrollingNavbar extends Component{
    render(){
        return(
            <div className="cont">
            <nav className="menu-wrapper">
              <ul className="menu">
               <li><a >  <Link className="link" >Leches</Link></a></li>
               <li><a > <Link className="link" >Quesos</Link></a></li>
               <li><a > <Link className="link" >Mantequillas</Link></a></li>
               <li><a > <Link className="link" >Crema</Link></a></li>
              </ul>
            </nav>
            </div>
            )
    }
} 
export default ScrollingNavbar