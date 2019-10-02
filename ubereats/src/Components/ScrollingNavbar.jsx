import React, { Component } from 'react';
import './ScrollingNavbar.css'

class ScrollingNavbar extends Component{
    render(){
        return(
            <div class="container">
            <nav class="menu-wrapper">
              <ul class="menu">
                <li><a href="#">Item One</a></li>
                <li><a href="#">Item Two</a></li>
                <li><a href="#">Item Three</a></li>
                <li><a href="#">Item Four</a></li>
                <li><a href="#">Item Five</a></li>
                <li><a href="#">Item Six</a></li>
                <li><a href="#">Item Seven</a></li>
              </ul>
            </nav>
            </div>
            )
    }
} 
export default ScrollingNavbar