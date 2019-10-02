import React, { Component } from 'react';
import './ScrollingNavbar.css'
import Supermarket from '../supermarket.json'


class ScrollingNavbar extends Component{
    render(){
        return(
            <div class="container">
            <nav class="menu-wrapper">
              <ul class="menu">
               <li>{Object.keys(Supermarket.Pasillos)}</li>
              </ul>
            </nav>
            </div>
            )
    }
} 
export default ScrollingNavbar