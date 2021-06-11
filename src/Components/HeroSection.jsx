import '../css/HeroSection.css';

const HeroSection = (props) => {
    return(
      <section id="hero" className="hero d-flex align-items-center">
          <div className="container">  
                  {
                      props.hero.map((herodata) => {
                          const {Heading,SubHeading,ImgUrl} = herodata;
                          return(
                            <div className="row">
                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                    <h1>{Heading}</h1>
                                    <h2>{SubHeading}</h2>
                                    <div>
                                        <div class="text-center text-lg-start">
                                            <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                                <span>Get Started</span>
                                                <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                    <img src={ImgUrl} class="img-fluid" alt="hero"/>
                                </div>
                             </div>
                          )
                      })
                  }
          </div>
      </section>
    );
}

export default HeroSection;