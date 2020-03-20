import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/scuduu-logo-r.png'
import LogoWhite from '../../assets/images/scuduu-logo-w.png'
import './header.css'
import { withRouter } from 'react-router-dom'
function Header(props) {
    // var [currentLink, setCurrentLink] = useState("world")

    const handleLink = (link) => {
        // setCurrentLink(link)
        props.history.push({ pathname: link })
    }


    useEffect(() => {
        // setCurrentLink(props.location.pathname)
    }, [])
    return (
        <div>
            <nav class="scuudu-nav px-3">
                <div class="logo mt-2" id="scuudu-logo">
                    <img src={props.location.pathname === '/' ? Logo : LogoWhite} alt="scuudu-logo" onClick={() => handleLink('/')} />
                </div>
                <div style={{ display: "none" }}>
                    <span className="fa fa-bars" style={{ color: "#ff3232" }}></span>
                </div>
                <div>
                    <span class={`dropper ${props.location.pathname === '/product' ? 'colored-red' : ""}`} onClick={() => { handleLink('/product') }}>Products
                {/* <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div> */}
                    </span>

                    <span class={`dropper ${props.location.pathname === '/services' ? 'colored-red' : ""}`} onClick={() => { handleLink('/services') }}>Services
                {/* <div class="dropping">
                            <ul>
                                <li>Virtual Reality (VR)</li>
                                <li>Visual Effects (VFX)</li>
                                <li>Embedded Systems (ES)</li>
                                <li>Artificial Intelligence (AI)</li>
                                <li>Augumented Reality (AR)</li>
                            </ul>
                        </div> */}
                    </span>

                    <span class={`dropper ${props.location.pathname === '/aboutus' ? 'colored-red' : ""}`} onClick={() => { handleLink('/aboutus') }}>About Us
                {/* <div class="dropping">
                            <ul>
                                <li>Virtual Reality (VR)</li>
                                <li>Visual Effects (VFX)</li>
                                <li>Embedded Systems (ES)</li>
                                <li>Artificial Intelligence (AI)</li>
                                <li>Augumented Reality (AR)</li>
                            </ul>
                        </div> */}
                    </span>

                    <span class="dropper">Support
                {/* <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div> */}
                    </span>
                    <span class={`dropper `} onClick={() => { handleLink('/') }}>Store
                {/* <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div> */}
                    </span>
                    <span >
                        <button className="px-4">Subscribe</button>
                    </span>
                </div>
                {/* <div>
                    
                </div> */}
            </nav>
        </div>
    )
}

export default withRouter(Header)
