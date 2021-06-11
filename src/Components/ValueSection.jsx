import '../css/ValueSection.css';

const ValueSection = (props) => {
    return(
        <section className="values">
            <div className="container">
                {
                    props.value.map((valuesdata) =>{
                        const {Title,Description} = valuesdata;
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
                            <div className="row">
                            {
                                valuesdata.ValueCards.map((values) => {
                                    const{CardTitile,CardImgUrl,CardDescrpition,CardClass,i} = values;
                                    return(
                                        <div className={CardClass}>
                                            <div className="box">
                                                 <img src={CardImgUrl} className="img-fluid" alt={i}/>
                                                 <h3>
                                                    {CardTitile}
                                                 </h3>
                                                 <p>
                                                    {CardDescrpition}
                                                 </p>
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
    );
}

export default ValueSection;