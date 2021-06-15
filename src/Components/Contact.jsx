import '../css/Contact.css';

const Contact = (props) => {
    return(
        <section id="contact" className="contact">
            <div className="container">
                {
                    props.detail.map((contactdata) => {
                        const {Title,Description} = contactdata;
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
                                  <div className="col-lg-6">
                                    <div className="row gy-4">
                                     {
                                        contactdata.ContactDetails.map((contact) => {
                                          const{Icon,Title,Details} = contact;
                                          return(
                                              <div className="col-md-6">
                                                  <div className="info-box">
                                                      <i className={Icon}></i>
                                                      <h3>
                                                        {Title}
                                                      </h3>
                                                      <p>
                                                        {Details}
                                                      </p>
                                                  </div>
                                              </div>
                                          )
                                        })
                                    }
                                    </div>
                                  </div>
                              </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Contact;
