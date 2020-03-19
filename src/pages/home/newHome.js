import React from 'react'
import './home.css'
import redDash from '../../assets/images/red-dash.svg'
import arrowLeft from '../../assets/images/arrow1.svg'
import videoThumb from '../../assets/images/video-thumbnail.png'
import playBtn from '../../assets/images/play-btn.svg'

function NewHome() {
    return (
        <div>
            <section className="row mx-0 slides">
                <div className="col-6">

                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="pr-6">
                        <h1 className="titles">Virtual Reality Experience</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am</p>
                    </div>
                </div>
            </section>


            <section className="row mx-0 about-home">
                <div className="col-12 d-flex align-items-center">
                    <div className="px-6">
                        <span class="small-indicator"><img src={redDash} class="mr-2" />About</span>
                        <h2 class="small-titles mt-3">Who We Are</h2>
                        <p class="content-text pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue
                        metus, malesuada habitasse.
                        Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus
                        nunc,
                        aliquet placerat turpis ornare pellentesque.. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et,
                        pharetra,
                        bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.</p>
                        <div className="d-flex justify-content-end">
                            <div className="more-txt">Learn more<img src={arrowLeft} alt="arrow left" className="ml-2" /></div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="row mx-0 latest">
                <div class="col-6 d-flex  justify-content-center align-items-center">
                    <div>
                        <h1 class="small-titles">Latest<br />Updates</h1>
                    </div>
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center">
                    <div>
                        <div class="video-container">
                            <img src={videoThumb} alt="video thumbnail for playing video"
                                class="video-thumb" />
                            <img src={playBtn} alt="play button, click to play video"
                                class="play-btn" />
                        </div>
                        <div className='mt-2'>
                            <span class="video-title pt-2 mr-5">Origins: Tales of Eri</span><span className="more-txt ml-4">Play now<img src={arrowLeft} alt="arrow left" className="ml-2" /></span>
                        </div>
                        <article>
                            <p class="content-text mt-4 video-description pl-3">sit amet, consectetur adipiscing elit. Non augue
                            metus, malesuada
                            habitasse.
                            Commodo non turpis purus nunc. Nisl sed et, phareuehju habitasse. Commodo non turpis purus nunc.
                        Nisl sed et, phareuehju </p>
                        </article>
                    </div>
                </div>
            </section>


            <section className="row mx-0 sub-strip">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <h2 className="small-titles">Let's stay in touch</h2>
                </div>
                <div className="col-md-6  d-flex justify-content-center align-items-center pr-6">
                    <div>
                        <p className="sub-text-strip">Sign up for smiles in your inbox: tips on oral care, plastic-free<br /> living plus new products, and giveaways.</p>

                        <form className="inline-form mt-4">
                            <input type="email" placeholder="Email" class="subscriber-email mr-3 sub-text-strip" />
                            <button class="sub-btn px-5 py-1">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewHome
