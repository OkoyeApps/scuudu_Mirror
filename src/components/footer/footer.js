import React from 'react'
import './footer.css'
import LogoWhite from '../../assets/images/Scuudu-Logo-W.svg'
import facebook from '../../assets/images/facebook.svg'
import insta from '../../assets/images/insta-logo.svg'
import youtube from '../../assets/images/youtube.svg'
import twitter from '../../assets/images/twitter.svg'
function Footer() {
    return (
        <div>
            <footer class="pt-5 px-5">
                <div class="logo">
                    <img src={LogoWhite} />
                </div>

                <div class="footer-content">
                    <article class="scuudu-address">
                        <address>Centenary City Estate<br /> Enugu Lifestyle and Golf City,<br /> KM 7 Port Harcourt - Enugu
                    Expressway,<br />
                    Ugwuaji, Enugu</address>
                        <p>+234 (0)812 345 6789</p>
                        <address>info@scuudu.com</address>
                    </article>

                    <article>
                        <h5 class="footer-titles">Company</h5>
                        <ul class="footer-list">
                            <li>Support</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Become a partner</li>
                        </ul>
                    </article>

                    <article>
                        <h5 class="footer-titles">About</h5>
                        <ul class="footer-list">
                            <li>Products</li>
                            <li>Play Store</li>
                            <li>Apple store</li>
                            <li>Oculus store</li>
                        </ul>
                    </article>

                    <article>
                        <h5 class="footer-titles">Resources</h5>
                        <ul class="footer-list">
                            <li>Tutorials</li>
                            <li>Documentation</li>
                        </ul>
                    </article>

                    <article>
                        <h5 class="footer-titles">Legal</h5>
                        <ul class="footer-list">
                            <li>Privacy Policy</li>
                        </ul>
                    </article>

                    <article>
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" class="mx-2" />
                        <img src={youtube} alt="youtube" class="mr-2" />
                        <img src={insta} alt="instagram" />
                    </article>
                </div>


                <section class="row mx-0 px-5">
                    <div class="col-12 d-flex justify-content-end">
                        <div>
                            <p>Select your preferred language</p>
                            <select class="lang-dropdown py-1 px-1">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                    </div>
                </section>


                <section class="copy-right">
                    <p>© 2020 Scuudu Labs. All Rights Reserved. Scuudu, Scuudu.com and the Scuudu logo are trademarks of Scuudu
                Labs in Nigeria and/or other countries.</p>
                </section>
            </footer>
        </div>
    )
}

export default Footer
