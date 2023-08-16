import React from 'react'

const Service = ({Scroll}) => {
  return (
    <>
    
<main ref={Scroll}>

  <section class="py-5 text-center container">
    <div class="row py-lg-3">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 id='S-h1'>Our Services</h1>
        <p id='service-para'>Whatever your web development needs may be, I am committed to delivering high-quality solutions that align with your business goals. Let's work together to bring your vision to life and create a powerful online presence for your brand. Feel free to reach out to me to discuss your project and get started on this exciting journey!</p>
       
      </div>
    </div>
  </section>

  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        

        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body" id='service-body-card'>
              <img id='img-card' src="./img/services/card-1.png" alt="loading..." />
              <p class="card-text"> I specialize in building custom, responsive websites from scratch. I understand that every business is unique, and I tailor my solutions to meet your specific requirements. By leveraging the latest technologies and best practices, I create websites that are not only visually appealing but also highly functional and user-friendly.</p>
              <div class="d-flex justify-content-between align-items-center"> 
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" id='services-btn'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body" id='service-body-card'>
              <img id='img-card' src="./img/services/card-2.png" alt="loading..." />
              <p class="card-text"> Efficient data management is crucial for a smooth user experience. I design and implement well-structured databases, whether it's SQL or NoSQL, ensuring quick and reliable data access. I also perform database optimization to enhance your application's performance and reduce response times. and get started on this exciting journey!</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" id='services-btn'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body" id='service-body-card'>
              <img id='img-card' src="./img/services/card-3.png" alt="loading..." />
              <p class="card-text"> I can create custom APIs or integrate third-party APIs to extend the functionality of your web application. This opens up opportunities for seamless data exchange and integration with various services and platforms.Whatever your web development needs may be, I am committed to delivering high-quality solutions that align with your business goals.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" id='services-btn'>Read More</button>
                </div>
              </div>
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

export default Service
