import React, { Component } from "react";
import { Provider } from "react-redux";

import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesAboutus";
import FeaturesSplit from "./components/sections/FeaturesSplitAboutus";
import Products from "./components/ProductsCanada";
import HeroCarousel from "react-hero-carousel";
import SectionHeader from './components/sections/partials/SectionHeader';
import Button from '@material-ui/core/Button';
import {Link} from 'react-scroll';
import SimpleAccordion from './UniAccordions/AccordionCN'

class UniCanada extends Component {
  render() {
    const sectionHeader = {
      title: 'Study in Canada',
    };
    
    return (
      <>
       <div className="HeroCarousel">
        <HeroCarousel >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618479043/buildings-2297210_1280_hivmt9.jpg"
            width="100%"
            height="100%"
          />
          
        </HeroCarousel>
      <div className=""></div>

  </div>
      <Provider store={store}>
        <div className="container">
         
       
          <div style={{textShadow:"1px 1px rgba(0,0,0,0.3)"}} id = "overlay" className='sec_hdr_container'>  
            <SectionHeader data={sectionHeader} className="padding-top-section-header center-content" />
            <div id = "overlay" className='sec_btn_container' style={{display:"flex",flexDirection:"column",verticalAlign:"center"}}>
              <div style={{padding:"0 30px 0 30px",width:"100%"}}>
                <a style={{color:"white"}}>
                  </a>
              </div>
                <Button
                      className="btn-seemore"
                        wideMobile
                        href="#canadaProducts"
                        style={{fontSize:"20px"}}
                      >
                      <Link
                        activeClass="active"
                        to="section-canada-cards"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >See More 	&#8595;</Link>
                  
                  </Button>
            </div>
          </div>
          <div>
           <Products/>
           <SimpleAccordion/>
          </div>
          
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
}

export default UniCanada;