import React, { useEffect, useState , useRef } from 'react'
import Model from './Model'
const Home = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {/* this is the botom of navbar  */}
      <div className="text-center hero-image">
            <div className="hero-Sub">
                <div className="col my-Left">
                    <h2 id="home-head-h2">HELLO IT'S ME</h2>
                    <h1 id="home-head-h1">WAQAS ARSHAD</h1>
                    <span id="home-head-span" classNameName="profile-role-tagline">Knac of building applications with front and back end operations.
                    </span>
                    <br /><br />
                    <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="/"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a><br/>
                    <button className="myBtn animBtn" onClick={()=> setOpenModal(true)}>Hire Me</button><br />
                </div>
                <div className="col myRight">
                    <img src="./img/about/hero-img.png" alt="..Loading" />
                </div>
            </div>
        </div>
        {openModal && <Model closeModal={setOpenModal}/>}
    </>
  )
}

export default Home
