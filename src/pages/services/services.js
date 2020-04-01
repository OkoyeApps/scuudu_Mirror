import React from 'react'
import bg from '../../assets/images/services-bg.png'
import VR from '../../assets/images/VR.png'
import VFX from '../../assets/images/VFX.png'
import AR from '../../assets/images/AR.png'
import ES from '../../assets/images/ES.png'
import AI from '../../assets/images/AI.png'
import Subscribe from '../../components/subcribeStrip/subscribeStrip'




import './services.css'
function Services() {
    return (
        <div>

            <div className="our-services">
                <div className="d-flex justify-content-center">
                    <div className="main-services-content">
                        <h3 className="service-header">Our Services</h3>
                        <section className="row mx-0">
                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-center pl-3"
                                    style={{
                                        backgroundImage: `url(${AI})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        minHeight: "40vh"
                                    }}
                                >
                                    <h4 className="service-titles">Artificial<br /> Intelligence (AI)</h4>
                                </div>
                                <p className="service-txt pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, alique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet
                                    </p>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-center pl-3"
                                    style={{
                                        backgroundImage: `url(${ES})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        minHeight: "40vh"
                                    }}
                                >
                                    <h4 className="service-titles">Embeded<br />System (ES)</h4>
                                </div>
                                <p className="service-txt pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, alique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet
                                    </p>
                            </div>


                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-center pl-3"
                                    style={{
                                        backgroundImage: `url(${VR})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        minHeight: "40vh"
                                    }}
                                >
                                    <h4 className="service-titles">Virtual<br /> Reality (VR)</h4>
                                </div>
                                <p className="service-txt pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, alique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet
                                    </p>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-center pl-3"
                                    style={{
                                        backgroundImage: `url(${AR})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        minHeight: "40vh"
                                    }}
                                >
                                    <h4 className="service-titles">Argumented<br /> Reality (AR)</h4>
                                </div>
                                <p className="service-txt pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, alique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet
                                    </p>
                            </div>


                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-center pl-3"
                                    style={{
                                        backgroundImage: `url(${VFX})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        minHeight: "40vh"
                                    }}
                                >
                                    <h4 className="service-titles">Visual<br /> Effects (VFX)</h4>
                                </div>
                                <p className="service-txt pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, alique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, nameii malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet
                                    </p>
                            </div>



                            <div className="col-md-6 mb-4">
                                <h3 style={{ textAlign: "left" }}>Got an awesome project for us?</h3>
                                <form>
                                    <input type="text" className="form-control mb-3 service-input" id="name" placeholder="Name" />
                                    <input type="email" className="form-control mb-3 service-input" id="email" placeholder="Email" />
                                    <input type="text" className="form-control mb-3 service-input" id="phonenumber" placeholder="Phone" />
                                    <textarea className="form-control mb-3 service-input" rows="6" placeholder="Message" />
                                    <button className="btn btn-danger service-btn">Submit</button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>


            </div>

            <section className="space-h"></section>
            <Subscribe />

        </div>
    )
}

export default Services
