import React from 'react'
import hero from '../../assets/images/HeroPage.png'
import './product.css'
import playBtn from '../../assets/images/play-btn.svg'
import Featured from '../../assets/images/featuredPics.png'
import Oculus from '../../assets/images/oculus-store.png'
import wyrewolf from '../../assets/images/wyrwolf pc 1.png'
import arrowLeft from '../../assets/images/arrow1.svg'
import EstateAR from '../../assets/images/estateAR.png'
import PlayStore from '../../assets/images/play-store.png'
import Subscribe from '../../components/subcribeStrip/subscribeStrip'

function Product() {
    return (
        <div>
            <div>
                <img src={hero} alt="hero wallpaper" className="hero-wallpaper" />
                <img src={playBtn} alt="play button, click to play video"
                    class="play-btn-lg" />
            </div>
            <h4 className="product-sm-title my-5">Featured Products</h4>

            <section className="row mx-0 px-6 pb-5 eri">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={Featured} className="feature-img" />
                </div>
                <div className="col-md-6">
                    <div>
                        <h2 className="product-title mb-2">Origins: Tales of Eri</h2>
                        <p className="product-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.</p>

                        <img src={Oculus} alt="oculus store" className="store-logo" />
                    </div>

                </div>

            </section>


            <section className="row mx-0 px-6 wyrewolf">
                <div className="col-md-6 d-flex align-items-center ">
                    <div>
                        <h2 className="product-title mb-2">Wyrewolf</h2>
                        <p className="product-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.</p>
                        <div>
                            <div className="more-txt">Learn more<img src={arrowLeft} alt="arrow left" className="ml-2" /></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center">
                    <img src={wyrewolf} className="w-img" />
                </div>
            </section>


            <section className="row mx-0 estateAR px-6">
                <div className="col-md-6 d-flex align-items-center">
                    <img src={EstateAR} className="w-img" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h2 className="product-title mb-2">EstateAR</h2>
                        <p className="product-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non augue metus, malesuada habitasse. Commodo non turpis purus nunc. Nisl sed et, pharetra, bibendum convallis amet lectus. Cursus nunc, aliquet placerat turpis ornare pellentesque.</p>
                        <img src={PlayStore} alt="google play store" className="store-logo" />
                    </div>
                </div>
            </section>
            <Subscribe />
        </div>


    )
}

export default Product
