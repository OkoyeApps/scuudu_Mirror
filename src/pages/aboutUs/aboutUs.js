import React from 'react'
import './aboutUs.css'
import Franky from '../../assets/images/franky 1.png'
import Kosisy from '../../assets/images/kaosy 1.png'
import Emeka from '../../assets/images/Emeka 1.png'
import Chinedu from '../../assets/images/Chinedu 1.png'
import Tony from '../../assets/images/Tony.png'
import Josh from '../../assets/images/josh.png'
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

            <section className="who pt-4 cover">
                <h3 className="product-sm-title">Who We Are</h3>
                <p>Scuudu is a startup growing from Genesys Tech Hub’s Research and Development Lab. The
                startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good
                through avant garde technologies. So far, Scuudu has worked on solutions leveraging Artificial
Intelligence, Machine Learning, Augmented Reality and Virtual Reality.</p>

                <p>Scuudu’s team is made up of the best collection of talent. A perfect blend of Engineers,
designers, software and business developers who have acquired varying experience while</p>
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
                                <span><img src={linkedInB} className="mr-3" alt="linkedIn Link" /></span>
                                <span><img src={twitterB} alt="twitter link" /></span>
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
                                <span><img src={linkedInB} className="mr-3" alt="linkedIn Link" /></span>
                                <span><img src={twitterB} alt="twitter link" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Emeka} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Emeka Onyebuchi</h4>
                            <h5 className="team-role">AI Expert/Engineer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" alt="linkedIn Link" /></span>
                                <span><img src={twitterB} alt="twitter link" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Chinedu} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Chinedu Achimalo</h4>
                            <h5 className="team-role">Developer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" alt="linkedIn Link" /></span>
                                <span><img src={twitterB} alt="twitter link" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Josh} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Joshua Nwankwo</h4>
                            <h5 className="team-role">Machine Learning Intern</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" alt="linkedIn Link" /></span>
                                <span><img src={twitterB} alt="twitter link" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div>
                            <div className="text-center">
                                <img src={Tony} alt="team member" className="team-member-img" />
                            </div>
                            <h4 className="team-mate-name">Anthony Chiaka</h4>
                            <h5 className="team-role">Visual Designer</h5>
                            <div className="text-center mt-3">
                                <span><img src={linkedInB} className="mr-3" alt="linkedIn Link" /></span>
                                <span><img src={twitterB} alt="twitter link" /></span>
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
