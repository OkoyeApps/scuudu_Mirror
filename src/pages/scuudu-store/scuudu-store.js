import React from 'react'
import './scuuduStore.css'
import AI from "../../assets/images/artificial-intelligence.png"
import ES from '../../assets/images/embedded-systems.png'
import VR from '../../assets/images/VR.png'
import arrowLeft from '../../assets/images/arrow-left.svg'
import SignUpSection from '../../components/signUpSection/signUpSection'


function ScuuduStore() {
    return (
        <div>
            <main class="scuudu-store px-5">
                <section class="row mx-0 first-1">
                    <div class="col-md-7 d-flex align-items-center justify-content-center">
                        <div class="intro-store">
                            <h1 class="store-title">Scuudu gets<br /> $1.4B investment</h1>
                            <p class="store-text pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus,
                            malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                    </p>
                            <button class="sub-btn">Read more</button>
                        </div>
                    </div>
                </section>


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


                <section class="row mx-0 tab-content">
                    <div class="col-md-4 my-3">
                        <div class="content-card">
                            <img src={AI} alt="illustration" />
                            <article class="px-4">
                                <div class="pt-3">
                                    <span class="company-name pr-2">Scuudu Labs</span><span class="content-date pl-2">Jan
                                2020</span>
                                </div>
                                <p class="pt-4 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada
                                    habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am.
                                    Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                        </p>
                            </article>
                        </div>
                    </div>

                    <div class="col-md-4 my-3">
                        <div class="content-card">
                            <img src={ES} alt="illustration" />
                            <article class="px-4">
                                <div class="pt-3">
                                    <span class="company-name pr-2">Scuudu Labs</span><span class="content-date pl-2">Jan
                                2020</span>
                                </div>
                                <p class="pt-4 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada
                                    habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am.
                                    Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                        </p>
                            </article>
                        </div>
                    </div>


                    <div class="col-md-4 my-3">
                        <div class="content-card">
                            <img src={VR} alt="illustration" />
                            <article class="px-4">
                                <div class="pt-3">
                                    <span class="company-name pr-2">Scuudu Labs</span><span class="content-date pl-2">Jan
                                2020</span>
                                </div>
                                <p class="pt-4 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada
                                    habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am.
                                    Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                        </p>
                            </article>
                        </div>
                    </div>


                    <div class="col-md-4 my-3">
                        <div class="content-card">
                            <img src={VR} alt="illustration" />
                            <article class="px-4">
                                <div class="pt-3">
                                    <span class="company-name pr-2">Scuudu Labs</span><span class="content-date pl-2">Jan
                                2020</span>
                                </div>
                                <p class="pt-4 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada
                                    habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am.
                                    Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                        </p>
                            </article>
                        </div>
                    </div>

                    <div class="col-md-4 my-3">
                        <div class="content-card">
                            <img src={AI} alt="illustration" />
                            <article class="px-4">
                                <div class="pt-3">
                                    <span class="company-name pr-2">Scuudu Labs</span><span class="content-date pl-2">Jan
                                2020</span>
                                </div>
                                <p class="pt-4 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada
                                    habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am.
                                    Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                        </p>
                            </article>
                        </div>
                    </div>


                    <div class="col-md-4 my-3">
                        <div class="content-card">
                            <img src={ES} alt="illustration" />
                            <article class="px-4">
                                <div class="pt-3">
                                    <span class="company-name pr-2">Scuudu Labs</span><span class="content-date pl-2">Jan
                                2020</span>
                                </div>
                                <p class="pt-4 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada
                                    habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am.
                                    Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis am
                        </p>
                            </article>
                        </div>
                    </div>
                </section>



                <section class="paginator row mx-0 d-flex justify-content-center">
                    <div>
                        <span>Page</span>
                        <span class="current-page">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span><img src={arrowLeft} /></span>
                    </div>
                </section>



                <section>
                    <SignUpSection />
                </section>
            </main>
        </div>
    )
}

export default ScuuduStore
