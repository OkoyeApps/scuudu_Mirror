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

            <div className="row px-6 mx-0">
                <div className="col-12">
                    <h4 className="product-sm-title my-5">Featured Products</h4>
                </div>
            </div>

            <section className="row mx-0 px-6 pb-5 eri">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={Featured} className="feature-img" alt="product 1" />
                </div>
                <div className="col-md-6">
                    <div>
                        <h2 className="product-title mb-2">Origins: Tales of Eri</h2>
                        <p className="product-txt">Through an unprecedented virtual experience, Tales of Eri takes you back to the origin by
                        immersing you into the traditional Nigerian environment. Eri and his wife are set to complete a
                        task given to them by their Chi. You will get to learn a lot about the Nigerian culture while
                        having fun. Characters in this game were created using 3D Design: Autodesk Maya. Game engine: Unity. Sound
                        design: Adobe Audition. Graphics: Adobe Photoshop.

</p>

                        <img src={Oculus} alt="oculus store" className="store-logo" />
                    </div>

                </div>

            </section>


            <section className="row mx-0 px-6 wyrewolf">
                <div className="col-md-6 d-flex align-items-center py-4">
                    <div>
                        <h2 className="product-title mb-2">Wyrewolf</h2>
                        <p className="product-txt">Just like a security dog, WyreWolf serves as an alert system that triggers off at the sight of any
                        suspicious movement. It is a fraud detection and prevention system that makes use of artificial
                        Intelligence and Machine Learning to flag irregular transactions.<br /> <br />The system is of utmost need
                        given the continuous rise in financial and wire frauds in Nigeria and beyond. WyreWolf is built
                        to become every user’s security alert. Annually, Nigerian banks and individuals loose over N15
                        billion to frauds related to unauthorized withdrawals from ATM and Bank Apps. This is a big
                        challenge and there is no comprehensive solution available yet to address this issue.

</p>
                        <div>
                            <div className="more-txt">Learn more<img src={arrowLeft} alt="arrow left" className="ml-2" /></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center">
                    <img src={wyrewolf} className="w-img" alt="wyrewolf platform" />
                </div>
            </section>


            <section className="row mx-0 estateAR px-6">
                <div className="col-md-6 d-flex align-items-center">
                    <img src={EstateAR} className="w-img" alt="EstateAR representation" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h2 className="product-title mb-2">EstateAR</h2>
                        <p className="product-txt">EstateAR 3D is a novel solution for Architects and Estate Managers. Through this Augmented
                        Reality App, Architects and Estate Managers can take customers on a virtual tour of building and
                        estate designs. The App lets users to cast a 3D view of designs on any flat surface and allows the
user to view the design from all perspectives.</p>
                        <img src={PlayStore} alt="google play store" className="store-logo" />
                    </div>
                </div>
            </section>
            <Subscribe />
        </div>


    )
}

export default Product
