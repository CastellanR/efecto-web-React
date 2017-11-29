import React, { Component } from 'react';

import './header.sass';
import logo from '../../assets/images/logo.png'

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(      
      <div className="container">
        <div className="shape">
          <div className="logo">
            <img src= {logo} alt=""/>  
          </div>        
          <div className= "content">
            <br/>
            <hr className="separator"/>
            <h1>DISEÑO WEB MENDOZA</h1>                        
            <p>Creamos estrategias de marketing digital a medida y bajo las nuevas
            tecnologías digitales.</p>
            <p>El equipo de efecto web desarrolla el diseño y la experiencia de tus clientes
            dentro de tu sitio web en base a una estrategia de marketing digital que te
            asegura el inicio de tu posicionamiento SEO.</p>   
          </div>        
        </div>
        <div className="circle">
          <i className="fa fa-arrow-down"></i>
        </div>    
      </div>
    );
  }     
}