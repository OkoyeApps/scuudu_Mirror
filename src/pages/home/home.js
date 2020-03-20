import React from 'react'
import './home.css'
import insta from '../../assets/images/insta-logo.svg'
import twitter from '../../assets/images/twitter.svg'
import redDash from '../../assets/images/red-dash.svg'
import videoThumb from '../../assets/images/video-thumbnail.png'
import playBtn from '../../assets/images/play-btn.svg'
import oculusHeadset from '../../assets/images/OculusHeadset.png'
function Home() {
    return (
        <div>
            <main>
                <section class="row mx-0 first-section">
                    <div class="col-6"></div>
                    <div class="col-6 d-flex justify-content-center align-items-center">
                        <div class="pr-5">
                            <h1 class="titles">Virtual Reality Experience</h1>
                            <p class="content-text pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue
                            metus,
                            malesuada habitasse.
                        Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am</p>
                        </div>
                        <div>
                            <div class="social-medias">
                                <img src={insta} alt="instagram link" class="mb-5" />
                                <img src={twitter} alt="twitter link" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="row mx-0 second-section">
                    <div class="col-12 d-flex align-items-center">
                        <div class="who-we-are pl-5">
                            <span class="small-indicator"><img src={redDash} class="mr-2" />About</span>
                            <h2 class="small-titles">Who We Are</h2>
                            <p class="content-text pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue
                            metus, malesuada habitasse.
                            Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus
                            nunc,
                            aliquet placerat turpis ornare pellentesque.. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et,
                            pharetra,
                        bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.</p>
                        </div>
                    </div>
                </section>



                <section class="row mx-0 third-section">
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
                            <h4 class="video-title pt-2">Origins: Tales of Eri</h4>
                            <p class="content-text mt-4 video-description pl-3">sit amet, consectetur adipiscing elit. Non augue
                            metus, malesuada
                            habitasse.
                            Commodo non turpis purus nunc. Nisl sed et, phareuehju habitasse. Commodo non turpis purus nunc.
                        Nisl sed et, phareuehju </p>
                        </div>

                    </div>
                </section>



                <section class="row mx-0 fourth-section">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={oculusHeadset} alt="oculus vr gear" />
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h2 class="small-titles">Let's stay in touch</h2>
                            <p class="content-text pt-4">Sign up for smiles in your inbox: tips on oral care,<br /> plastic-free
                        living
                        plus new products, and
                        giveaways.</p>

                            <form class="inline-form pt-5">
                                <input type="email" placeholder="Email" class="subscriber-email mr-3" />
                                <button class="sub-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
