import React, { Component } from 'react';
import Category from '../Components/Category'
import './Categories.css'
import NavbarTopCategories from '../Components/NavbarTopCategories'
import {Link} from 'react-router-dom'
class Categories extends Component{
    render(){ 
        return(
            <React.Fragment>
                <NavbarTopCategories/>
                <div id="categories" className="content container">
                    <div className="row">
                       <Link className="link" to='/leches'><Category image="frescos.png" name="Frescos y Lácteos"/></Link>
                       <Category image="frutas.png" name="Frutas y Verduras"/>
                       <Category image="aseo.png" name="Aseo y Limpieza"/>
                       <Category image="dulces.png" name="Dulces y Desayuno"/>
                       <Category image="despensa.png" name="Despensa"/>
                       <Category image="bebidas.png" name="Bebidas y Licores"/> 
                       <Category image="congelados.png" name="Congelados"/>
                       <Category image="cuidado.png" name="Cuidado Personal"/>
                       <Category image="bebes.png" name="Bebes y Niños"/>
                       <Category image="mascotas.png" name="Mascotas"/>
                      
                    </div>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Categories