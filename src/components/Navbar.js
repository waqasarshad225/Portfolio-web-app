import React, { useState , useRef } from 'react'
import About from './About';
import Home from './Home';
import Service from './Service';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

const Navbar = () => {
const [text ,setText] = useState('Dark');

const [mode, changeMode] = useState('dark');

const themeMode =()=>{
    if (mode === 'dark'){
        changeMode('light')
        setText('Light') 
    }else{
        changeMode('dark')
        setText('Dark')
    }
}

// For Scrolling 
const refAbout = useRef(null);
const ScrlAbout = () => {
    refAbout.current?.scrollIntoView({behavior: 'smooth'});
    };

const refTest = useRef(null);
const ScrlTest = () => {
    refTest.current?.scrollIntoView({behavior: 'smooth'});
    };

const refSer= useRef(null);
const ScrlSer = () =>{
    refSer.current?.scrollIntoView({behavior: 'smooth'});
}

const refCon= useRef(null);
const ScrlCon = () =>{
    refCon.current?.scrollIntoView({behavior: 'smooth'});
}

// const refBlog = useRef(null);
// const ScrlBlog =()=>{
//     refBlog.current?.scrollIntoView({behavior:'smooth'});
// }
return (<>
         <nav  className={`navbar navbar-${mode} bg-${mode} fixed-top`}>
            <div className="container-fluid">
                <a className="navbar-brand"  to="#">Portfolio.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end text-bg-dark`} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Waqas Arshad</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" id='nav-side-bar'>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about" onClick={ScrlAbout}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonial" onClick={ScrlTest}>Testimonial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services" onClick={ScrlSer}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact"  onClick={ScrlCon}>Contact</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#Blog" onClick={ScrlBlog} >Blog</a>
                    </li> */}
                    <li>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={themeMode}/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">{text}</label>
                    </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
        <Home/>
        {<About Scroll={refAbout}/>}
        <Testimonial Scroll={refTest}/>
        <Service Scroll={refSer} />
        <Contact  Scroll={refCon}/>
        {/* <Blog Scroll={refBlog}/> */}
        <Footer/>
    </>
  );
}
export default Navbar;