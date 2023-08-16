import React from 'react'

const Blog = ({Scroll}) => {
  return (
    <>
    <main class="container" ref={Scroll}>
        <h1 id='B-h1'>Blog</h1>
        <p id='c-comment'>Welcome to my Blog.Here i will post news and updates</p>
  <div className='Blog-card'>
          <h1>Christina Vanessa</h1>
          <p className='blog-auther'>
            post by: waqas arshad 
            <span>14/05/2023</span> 
          </p>
          <p className='blog-content'>
          Graphic designer and visual communicator Christina Vanessa clearly has an eye for aesthetics. The first page we reach on this graphic design portfolio example is a simple expression of her creative work and personality. There’s a fullscreen looped video showcasing her best pieces, with her name and disciplines written above.
          </p>
          <img src="./img/blog/blog-img.jpg" alt="loading..." />
        </div>
        <div className='card'>
          <h1>Sophie Brittian</h1>
          <p className='blog-auther'>
            post by: waqas arshad 
            <span>14/05/2023</span> 
          </p>
          <p className='blog-content'>
           
            Specializing in branding and UI/UX design, Sophie Brittain’s UX portfolio website certainly demonstrates her skills in both areas. She’s crafted a well-defined visual language for her site, made up of three colors, geometric shapes, vector line icons and plenty of white space. Last but not least, Sophie has brought everything together by incorporating a favicon that echoes the striking visual on her homepage.
          </p>
          <img src="./img/blog/blog-img1.jpg" alt="" />
        </div>
        <div className='card'>
          <h1>Steve Wolf Designs</h1>
          <p className='blog-auther'>
            post by: waqas arshad 
            <span>14/05/2023</span> 
          </p>
          <p className='blog-content'>
          With the super sharp high-quality visuals on Steve Wolf’s design portfolio website, it almost feels like you can reach out and grab the products photographed. The organized grid layout and screen-to-screen visuals put the emphasis on the works themselves.
A discreet hover effect on each image reveals the name of the project, while keeping text to a minimum.
          </p>
          <img src="./img/blog/blog-img2.jpg" alt="" />
        </div>
        <div className='card'>
          <h1>Wendy Ju</h1>
          <p className='blog-auther'>
            post by: waqas arshad 
            <span>14/05/2023</span> 
          </p>
          <p className='blog-content'>
          The animation that greets us upon entering Wendy Ju’s graphic design portfolio sets the tone for the rest of her site. It smoothly welcomes us into her world, depicting a book or fan opening up, along with the word “hello” in both English and Mandarin. The animation is subtle and precise, matching her minimalistic aesthetic.
Further down the homepage, Wendy incorporates a fun cursor interaction using Velo by Wix.
          </p>
          <img src="./img/blog/blog-img3.jpg" alt="" />
        </div>
  

</main>
    </>
  )
}

export default Blog
