import React from 'react'

const About = ({Scroll}) => {

  return (
    <>
<main ref={Scroll}>
 <section class="py-5 text-center container about-main">
   <div class="row py-lg-6">
     <div class="col-lg-6 col-md-8 mx-auto ">
     <h1 class="fw-light" id='about-h'>ABOUT US</h1>
     <div class="text-center" id='about-img'>
       <img src="./img/about/about-img.jpg" class="rounded" alt="..."/>
     </div>
       <h2 class="fw-light">Waqas Arshad</h2>
       <p class="text-body-secondary">Hello! I'm Waqas, a highly skilled Full Stack Developer with expertise in a variety of technologies, languages, and frameworks. My journey in software development began with a fascination for web technologies, and I've honed my skills in creating cutting-edge applications..</p>
       <p>
         <a href="#" class="btn btn-primary my-2">Swipe Up</a>
       
       </p>
     </div>
   </div>
 </section>

 <div class="album py-5 bg-body-tertiary">
   <div class="container">

     <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       <div class="col">
         <div class="card shadow-sm">
         <i class="fa fa-file-code-o" aria-hidden="true" id='card-icon'></i>
           <div class="card-body">
           <h3 id='card-icon-T'>Front End</h3>
             <p class="card-text">As a Full Stack Developer, I'm proficient in crafting captivating user interfaces using HTML, CSS, and JavaScript. I have a keen eye for detail and strive to ensure that the websites I create are not only visually appealing but also highly responsive and accessible across different devices.

One of my favorite front-end libraries is React, which I use to build dynamic and interactive user interfaces.  React allows me to efficiently manage state and create reusable components to enhance the overall development process.</p>
             
           </div>
         </div>
       </div>
       <div class="col">
         <div class="card shadow-sm">
         <i class="fa fa-code-fork" aria-hidden="true" id='card-icon'></i>
           <div class="card-body">
           <h3 id='card-icon-T'>Back End</h3>
             <p class="card-text">On the back-end, I excel in working with SQL databases, leveraging my knowledge to design efficient database schemas and execute complex queries. Whether it's MySQL, PostgreSQL, or other relational databases, I ensure data integrity and optimal performance.
When it comes to NoSQL databases, MongoDB is one of my go-to choices. I find it well-suited for flexible data models and scalability, making it an excellent option for modern web applications that require quick and dynamic data handling.</p>
             
           </div>
         </div>
       </div>
       <div class="col">
         <div class="card shadow-sm">
         <i class="fa fa-codepen" aria-hidden="true" id='card-icon'></i>
           <div class="card-body">
           <h3 id='card-icon-T'>Other</h3>
             <p class="card-text">Gatsby is another tool in my arsenal, and it's perfect for building blazing-fast websites and applications. As a static site generator, Gatsby empowers me to create content-rich sites that load quickly and provide an exceptional user experience.

Collaboration and Problem-Solving:
I'm a team player, and I enjoy collaborating with other developers, designers, and stakeholders to bring ideas to life. My strong problem-solving skills help me tackle challenges efficiently, ensuring that projects are delivered on time and within budget.</p>
             
           </div>
         </div>
       </div>
      
     </div>
   </div>
 </div>

</main>
    </>
  )

}
export default About;
