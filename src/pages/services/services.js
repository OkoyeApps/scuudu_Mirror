import React, { useState } from 'react'
import VR from '../../assets/images/VR.png'
import VFX from '../../assets/images/VFX.png'
import AR from '../../assets/images/AR.png'
import ES from '../../assets/images/ES.png'
import AI from '../../assets/images/AI.png'
import Subscribe from '../../components/subcribeStrip/subscribeStrip'




import './services.css'
function Services(props) {
    var [mailDetails, setMailDetails] = useState({});
    var [alertMessenger, setAlertMessenger] = useState({ type: true, message: '' });
    var [show, setShow] = useState(false);

    const handleChange = (e) => {
        setMailDetails({ ...mailDetails, [e.target.id]: e.target.value })
    }
    const clearInputs = () => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('phonenumber').value = '';
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var templateParams = {
            to_name: "Scuudu",
            from_name: mailDetails.name,
            from_email: mailDetails.email,
            message: mailDetails.message,
            phone: mailDetails.phonenumber
        };
        window.emailjs.send('gmail', 'scuudu', templateParams).then((res) => {
            setShow(true);
            setAlertMessenger({ type: true, message: 'We have received your message 👍' });
            clearInputs();
            setTimeout(() => {
                setShow(false)
            }, 6000);
        }).catch((err) => {
            setShow(true);
            setAlertMessenger({ type: false, message: 'Something went wrong, please resend 😵' });
            setTimeout(() => {
                setShow(false)
            }, 6000);
        })
    }

    return (
        <div>
            {show ? <div className={alertMessenger.type ? "success-alert" : "fail-alert"}>
                <p className="mb-0">{alertMessenger.message}</p>
            </div> : <></>}
            <div className="our-services">
            </div>
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
                                The large volume of data you generate while interacting with customers, suppliers and
                                employees could be put to better use. With the use of data analytics and machine learning
                                capabilities, we create mathematical models that deliver to you the most precise predictions for
                                decision making. Artificial intelligence is the future of business and we are here to walk you
                                through that future.
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
                                We create the best combinations of hardware and software to perform designated functions. All we need from you is a description of what you want and we will build it. Our team of designers
                                makes use of high end technologies and methodologies to develop the best embedded systems
                                solutions.

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
                                The potential of VR is quite wide; providing a fascinating experience by creating a blend of the
                                real and virtual worlds. VR is already changing how enterprises offer their services and interact
                                with customers. In the Scuudu Labs, we create VR solutions that fit into different organizational
                                processes and enhance customer service experience.
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
                                Making use of actual footage and manipulated imagery, we create those impossible moves you thought could never appear in films. Our experts use the latest technologies in VFX to deliver
                                mind blowing results.

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
                                AR offers the chance to overlay information, images, or other content onto a customer&#39;s view of
                                the world. There is a lot that could be done with AR today, from creating 3D manufacturing
                                designs to allowing customers view and experience products through 3D models.<br /><br />

                                Augmented reality is now playing important roles in customer service worldwide and this trend will continue
                                increasingly. The possibilities seem to be limitless and we are your ticket to exploring all that.

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
                                <h4 className="service-titles">3D Modeling<br />
                                & Rendering<br />
(Product Design)</h4>
                            </div>
                            <p className="service-txt pt-4">
                                AR offers the chance to overlay information, images, or other content onto a customer&#39;s view of
                                the world. There is a lot that could be done with AR today, from creating 3D manufacturing
                                designs to allowing customers view and experience products through 3D models.<br /><br />

                                Augmented reality is now playing important roles in customer service worldwide and this trend will continue
                                increasingly. The possibilities seem to be limitless and we are your ticket to exploring all that.

                                    </p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <h1 className="got-awesome">Got an<br /> awesome<br /> project for us?</h1>
                        </div>

                        <div className="col-md-6 mb-4">
                            <h3 style={{ textAlign: "left" }} className="got-awesome-sm">Got an awesome project for us?</h3>
                            <form>
                                <input type="text" className="form-control mb-3 service-input" id="name" placeholder="Name" onChange={handleChange} />
                                <input type="email" className="form-control mb-3 service-input" id="email" placeholder="Email" onChange={handleChange} />
                                <input type="text" className="form-control mb-3 service-input" id="phonenumber" placeholder="Phone" onChange={handleChange} />
                                <textarea className="form-control mb-3 service-input" rows="6" placeholder="message" id="message" onChange={handleChange} />
                                <button className="btn btn-danger service-btn" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>



            {/* <section className="space-h"></section> */}
            <Subscribe />

        </div>
    )
}

export default Services
