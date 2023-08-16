import React from 'react'

const Contact = ({Scroll}) => {
  return (
    <>
    
    <div className='m-login-body' ref={Scroll}>
        <h1>Contact Us</h1>
        <p id='c-comment'>We Are Here For You. </p>
          <form action="" className='m-login-box'>
              <input type="text" name='name' placeholder='Name' autocomplete="off"/>
              <input type="email" name="email" id="Email" placeholder='Email' autocomplete="off"/>
              <textarea name="textarea" id="" cols="20" rows="5" placeholder='Message...'></textarea>
              <button className='conatct-submit'>Let's Talk</button>
          </form>
      </div> 
      
    </>
  )
}

export default Contact
