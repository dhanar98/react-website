import '../css/AboutSection.css';

const AboutSection = (props) => {
    return(
        <section id="about" className="about">
           <div className="container">
               {
                   props.about.map((aboutdata) => {
                     const {Heading,SubHeading,paragraph,ImgUrl} = aboutdata;
                     return(
                         <div className="row gx-0">
                             <div className="col-lg-6 d-flex flex-column justify-content-center">
                                 <div className="content">
                                     <h3>
                                          {Heading}
                                     </h3>
                                     <h2>
                                          {SubHeading}
                                     </h2>
                                     <p>
                                          {paragraph}
                                     </p>
                                     <div className="text-center text-lg-start">
                                        <a href="#1" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                          <span>Read More</span>
                                          <i className="ri-arrow-right-line"></i>
                                        </a>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-lg-6 d-flex align-items-center">
                                  <img src={ImgUrl} class="img-fluid" alt="about"/>
                             </div>
                         </div>
                     )
                   })
               }
           </div>
        </section>
    );
}

export default AboutSection;