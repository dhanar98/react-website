import "../css/ServiceSection.css";

const ServiceSection = (props) =>{
    return(
        <section id="service" className="services">
            <div className="container">
                {
                  props.service.map((servicedata) => {
                    const {Title,Description} = servicedata;
                      return(
                          <>
                             <header className="section-header">
                                <h2>
                                    {Title}
                                </h2>
                                <p>
                                    {Description}
                                </p>
                            </header>
                            <div className="row gy-4">
                                {
                                    servicedata.ServiceCards.map((services) => {
                                        const{CardTitile,CardDescrpition,CardClass} = services;
                                        return(
                                            <div className="col-lg-4 col-md-6">
                                                <div className={CardClass}>
                                                    <i className="ri-discuss-line icon"></i>
                                                    <h3>
                                                        {CardTitile}
                                                    </h3>
                                                    <p>
                                                        {CardDescrpition}
                                                    </p>
                                                    <a href="#1" className="read-more"><span>Read More</span><i className="ri-arrow-right-line"></i></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                          </>
                      )
                  })
                }
            </div>
        </section>
    )
}

export default ServiceSection;