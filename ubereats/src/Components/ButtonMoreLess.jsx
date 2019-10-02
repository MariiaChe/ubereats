import React, { Component } from 'react';
import './ButtonMoreLess.css'
class ButtonMoreLess extends Component{
    render(){
        return(
            <React.Fragment>
              <div className="row BtnMoreLess">
                  <div className="less">-</div>
                  <input value="0" type="number"/>
                  <div className="more">+</div>
              </div>  
            </React.Fragment>
        )
    }
} 
export default ButtonMoreLess