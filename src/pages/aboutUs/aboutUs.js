import React from 'react'
import './aboutUs.css'
import Franky from '../../assets/images/Franky 1.png'
import Kosisy from '../../assets/images/Kaosy 1.png'
import Emeka from '../../assets/images/Emeka 1.png'
import Chinedu from '../../assets/images/Chinedu 1.png'
import Tony from '../../assets/images/Tony.png'
import twitterB from '../../assets/images/blue-twitter.svg'
import linkedInB from '../../assets/images/blue-linkedIn.svg'
import Subscribe from '../../components/subcribeStrip/subscribeStrip'



function AboutUs() {
    return (
        <div>
            <section className="row mx-0 about-bg px-6">
                <div className="col-md-6 d-flex align-items-center">
                    <h2 className="titles">Innovation For<br />
                    A better<br />Tomorrow.</h2>
                </div>
                <div className="col-md-6 empty-div">

                </div>
            </section>

            <section className="who pt-4">
                <h3 className="text-center product-sm-title">Who We Are</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque..</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque..
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque..
                </p>
            </section>


            <section className="px-6">
                <h3 className="text-center py-5 product-sm-title">Meet the Team</h3>
                <article className="row mx-0">
                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Franky} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Franklin Osondu</h4>
                            <h5 className="team-role">Lead, Research & Development</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" /></span>
                                <span><img src={twitterB} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Kosisy} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Kaosicho Dim</h4>
                            <h5 className="team-role">Visual Designer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" /></span>
                                <span><img src={twitterB} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Emeka} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Emeka Onyebuchi</h4>
                            <h5 className="team-role">AI Expert / Engineer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" /></span>
                                <span><img src={twitterB} /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Chinedu} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Emeka Onyebuchi</h4>
                            <h5 className="team-role">AI Expert / Engineer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" /></span>
                                <span><img src={twitterB} /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Kosisy} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Emeka Onyebuchi</h4>
                            <h5 className="team-role">AI Expert / Engineer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" /></span>
                                <span><img src={twitterB} /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Tony} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Emeka Onyebuchi</h4>
                            <h5 className="team-role">AI Expert / Engineer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" /></span>
                                <span><img src={twitterB} /></span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <Subscribe />
        </div>
    )
}

export default AboutUs
