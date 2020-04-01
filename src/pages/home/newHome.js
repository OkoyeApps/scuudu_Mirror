import React from 'react'
import './home.css'
import redDash from '../../assets/images/red-dash.svg'
import arrowLeft from '../../assets/images/arrow1.svg'
import videoThumb from '../../assets/images/video-thumbnail.png'
import playBtn from '../../assets/images/play-btn.svg'
import Subscribe from '../../components/subcribeStrip/subscribeStrip'

function NewHome() {
    return (
        <div>
            <section className="row mx-0 slides">
                <div className="col-md-6 col-sm-1 empty-div">

                </div>
                <div className="col-md-6 d-flex justify-titles align-items-center">
                    <div className="pr-6">
                        <h1 className="titles">Virtual Reality Experience</h1>
                        <p className="sub-title-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am</p>
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
                <div class="col-md-6 d-flex  justify-titles align-items-center">
                    <div>
                        <h1 class="small-titles">Latest<br />Updates</h1>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-titles align-items-center">
                    <div>
                        <div class="video-container">
                            <img src={videoThumb} alt="video thumbnail for playing video"
                                class="video-thumb" />
                            <img src={playBtn} alt="play button, click to play video"
                                class="play-btn" />
                        </div>
                        <div className='mt-2 d-flex'>
                            <div class="video-title pt-2 mr-5">Origins: Tales of Eri</div>
                            <div className="more-txt pt-2">Play now<img src={arrowLeft} alt="arrow left" className="ml-2" /></div>
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

            <Subscribe />

        </div>
    )
}

export default NewHome
