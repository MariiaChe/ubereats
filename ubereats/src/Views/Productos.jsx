import React, { Component } from 'react';
import NavbarTopLacteos  from '../Components/NavbarTopLacteos'
import ItemList from '../Components/ItemList'
// import ScrollingNavbar from '../Components/ScrollingNavbar' 
import '../Components/ScrollingNavbar.css'
import  NavbarBottom from '../Components/NavbarBottom'
import {Link } from 'react-router-dom'



class Productos extends Component{
    constructor(props){
        super(props) 
        this.state={
                mapNow:"Leches"
              }  
    }
    changeMap(sub){
        this.setState({mapNow:sub})
    }
    render(){
        return( 
            <React.Fragment>
                <NavbarTopLacteos/>
                <div className="cont">
                    <nav className="menu-wrapper">
                    <ul className="menu">
                    <li><a onClick={()=>this.changeMap('Leches')} >  <Link className="link" >Leches</Link></a></li>
                    <li><a onClick={()=>this.changeMap('Quesos')} > <Link className="link" >Quesos</Link></a></li>
                    <li><a onClick={()=>this.changeMap('Mantequillas')} > <Link className="link" >Mantequillas</Link></a></li>
                    <li><a onClick={()=>this.changeMap('Cremas')} > <Link className="link" >Crema</Link></a></li>
                    </ul>
                    </nav>
                    </div>
                {/* <ScrollingNavbar /> */}
                <div className="content container">
                  <ItemList sub={this.state.mapNow}/>
                </div>
               <NavbarBottom/>
            </React.Fragment>
        )
    }
} 
export default Productos