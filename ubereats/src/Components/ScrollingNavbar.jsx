import React, { Component } from 'react';
import './ScrollingNavbar.css'
import Supermarket from '../supermarket.json'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"



class ScrollingNavbar extends Component{
    render(){
        return(
            <div className="cont">
            <nav className="menu-wrapper">
              <ul className="menu">
               <li><a href="#">  <Link className="link" to='/leches'>Leches</Link></a></li>
               <li><a href="#"> <Link className="link" to='/quesos'>Quesos</Link></a></li>
               <li><a href="#"> <Link className="link" to='/Mantequillas'>Mantequillas</Link></a></li>
               <li><a href="#"> <Link className="link" to='/Crema'>Crema</Link></a></li>
              </ul>
            </nav>
            </div>
            )
    }
} 
export default ScrollingNavbar