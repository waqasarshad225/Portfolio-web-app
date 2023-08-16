import React from 'react'

const Testimonial = ({Scroll}) => {
    
  return (
    <>
    <main ref={Scroll} >
    <div class="container marketing"  >
    <h1 id='T-heading'>Testimonials</h1>
    <p id='T-comment'>What our clients are saying</p>

<div class="row">
<div class="col-lg-4" id='T-card'>
<img id='client1-img' src="./img/testimonial/1.jpg" alt="loading" />
<p id='T-para'><span>&#182;</span> 
    Working with Waqas Arshad was an amazing experience. They were able to capture my vision perfectly and deliver a high-quality product that exceeded my expectations. They were professional, responsive, and always went above and beyond to ensure my satisfaction. I highly recommend Jhon Wick for any design project. I highly recommend Tom Harry for any branding project.
    <span>&#182;</span> </p>
    <p id='T-para'><span id='T-client'>MR Jhon Wick </span>High Table</p>

</div>
<div class="col-lg-4" id='T-card'>
<img id='client1-img' src="./img/testimonial/2.jpg" alt="loading" />
<p id='T-para'><span>&#182;</span>
    I had the pleasure of working with Waqas Arshad on a branding project for my business, and I couldn't be happier with the results. [Waqas Arshad] has a keen eye for design and was able to create a brand identity that truly represents my business. Their attention to detail and willingness to work collaboratively made the entire process seamless. I highly recommend Tom Harry for any branding project.
    <span>&#182;</span> </p>
    <p id='T-para'><span id='T-client'>Tom Harry </span>CEO OF JBL</p>

</div>
<div class="col-lg-4" id='T-card'>
<img id='client1-img' src="./img/testimonial/3.jpg" alt="loading" />
<p id='T-para'><span>&#182;</span>
    I reached out to Waqas Arshad for help with a website redesign, and I am so glad I did. [Waqas Arshad] was able to take my outdated website and turn it into a modern, user-friendly site that perfectly showcases my business. They were easy to work with, communicative, and delivered the project on time and within budget. I would highly recommend Mark Watsan for any web design project.
    <span>&#182;</span> </p>
    <p id='T-para'><span id='T-client'>Dr Mark Watsan </span> co-founder MTA</p>

        </div>
    </div>
</div>
</main>
    </>
  )
}

export default Testimonial;
