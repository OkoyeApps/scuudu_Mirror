import React from 'react'
import logoWhite from '../../assets/images/scuduu-logo-w.png'
import facebook from '../../assets/images/facebook.svg'
import insta from '../../assets/images/insta-logo.svg'
import youtube from '../../assets/images/youtube.svg'
import twitter from '../../assets/images/twitter.svg'
import goUp from '../../assets/images/goUp.svg'
import './footer.css'

function NewFooter() {
    const moveUp = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="px-6">
            <footer className="big-footer pt-5">
                <section className="row mx-0">
                    <div className="col-md-8 col-xs-4 logo">
                        <div>
                            <img src={logoWhite} alt="logo" />
                        </div>

                    </div>
                    <div className="col-md-4 col-xs-8 d-flex j-end">
                        <article>
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" class="mx-2" />
                            <img src={youtube} alt="youtube" class="mr-2" />
                            <img src={insta} alt="instagram" />
                        </article>
                    </div>
                </section>

                <section className="row mx-0 mx-6 pt-5 pb-4 mb-3 footer-listings">
                    <div className="col-md-3 col-sm-2">
                        <div className="pl-4">
                            <h5 class="footer-titles">Company</h5>
                            <ul class="footer-list">
                                <li>Services</li>
                                <li>Products</li>
                                <li>News</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-2">
                        <div>
                            <h5 class="footer-titles">Support</h5>
                            <ul class="footer-list">
                                <li>FAQs</li>
                                <li>Downloads</li>
                                <li>Resources</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3  col-sm-2 no-follow">
                        <div>
                            <h5 class="footer-titles">Follow</h5>
                            <ul class="footer-list">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3  col-sm-2">
                        <div>
                            <h5 class="footer-titles">Contact Us</h5>
                            <ul class="footer-list">
                                <li>info@scuudu.com</li>
                                <li>+234 (0)812 345 6789</li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="row mx-0 mx-6 terms-policy">
                    <div className="col-md-3">
                        <p>Terms of Services</p>
                    </div>
                    <div className="col-md-3 pl-4">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-md-3">
                        <p>Site Map</p>
                    </div>
                    <div className="col-md-3">
                        <select class="lang-dropdown py-1 px-1">
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                        </select>
                    </div>
                    <img src={goUp} alt="go up" className="go-up" onClick={moveUp} />
                </section>

                <section className="text-center pb-5">
                    <p>© 2020 Scuudu Labs. All Rights Reserved</p>
                    <p>Scuudu, Scuudu.com and the Scuudu logo are trademarks of Scuudu Labs in Nigeria and/or other countries.</p>
                </section>
            </footer>
            <footer className="sm-footer pt-3">
                <section className="sm-footer-logo pb-4">
                    <div className="logo text-center">
                        <img src={logoWhite} alt="logo" />
                    </div>
                    <div className="text-center">
                        <article>
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" class="mx-2" />
                            <img src={youtube} alt="youtube" class="mr-2" />
                            <img src={insta} alt="instagram" />
                        </article>
                    </div>
                </section>
                <section className="text-center my-3">
                    <span>Company</span>
                    <span className="mx-3">Support</span>
                    <span>Contact Us</span>
                </section>



                <section className="text-center my-4">
                    <span>Terms of Services</span>
                    <span className="mx-3">Privacy Policy</span>
                    <span>Site Map</span>
                    <span>
                        <select class="lang-dropdown py-1 px-1">
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                        </select>
                    </span>
                </section>


                <section className="text-center sm-copy pb-3">
                    <p>© 2020 Scuudu Labs. All Rights Reserved</p>
                    <p>Scuudu, Scuudu.com and the Scuudu logo are trademarks of Scuudu Labs in Nigeria and/or other countries.</p>
                </section>
            </footer>

        </div>
    )
}

export default NewFooter
