import React from 'react'
import hero from '../../assets/images/HeroPage.png'
import './scuuduVideo.css'
import SignUpSection from '../../components/signUpSection/signUpSection'
function ScuuduVideo() {
    return (
        <div>
            <main class="scuudu-store">
                <div>
                    <img src={hero} alt="hero wallpaper" className="hero-wallpaper" />
                </div>
                <section class="tab-section row mx-0">
                    <div class="col-12 my-5">
                        <div class="store-tabs">
                            <div class="d-flex justify-content-center">
                                <div class="d-tab selected-tab">Popular</div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="d-tab">New Arrivals</div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="d-tab">Best Sellers</div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="d-tab">Specials</div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="row mx-0">
                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>

                    <article className="col-md-3">
                        <div className="grayed-out my-4"></div>
                    </article>
                </section>

                <section>
                    <SignUpSection />
                </section>
            </main>
        </div>
    )
}

export default ScuuduVideo
