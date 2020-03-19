import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/ScuuduLogo.svg'
import './header.css'
import { withRouter } from 'react-router-dom'
function Header(props) {
    var [currentLink, setCurrentLink] = useState("world")

    const handleLink = (link) => {
        setCurrentLink(link)
        props.history.push({ pathname: link })
    }


    useEffect(() => {
        setCurrentLink(props.location.pathname)
    }, [])
    return (
        <div>
            <nav class="scuudu-nav px-3">
                <div class="logo" id="scuudu-logo">
                    <img src={Logo} alt="scuudu-logo" />
                </div>
                <div>
                    <span class={`dropper ${currentLink === "/" ? "colored-red" : ""}`} onClick={() => { handleLink('/') }}>World of Scuudu
                <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div>
                    </span>

                    <span class="dropper">Services
                <div class="dropping">
                            <ul>
                                <li>Virtual Reality (VR)</li>
                                <li>Visual Effects (VFX)</li>
                                <li>Embedded Systems (ES)</li>
                                <li>Artificial Intelligence (AI)</li>
                                <li>Augumented Reality (AR)</li>
                            </ul>
                        </div>
                    </span>
                    <span class="dropper">Products
                <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div>
                    </span>
                    <span class="dropper">Support
                <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div>
                    </span>
                    <span class={`dropper ${currentLink === "/store" ? "colored-red" : ""}`} onClick={() => { handleLink('/store') }}>Store
                {/* <div class="dropping">
                            <ul>
                                <li>Our Company</li>
                                <li>The Team</li>
                                <li>News</li>
                                <li>Career</li>
                            </ul>
                        </div> */}
                    </span>
                </div>
                <div>
                    <button>Subscribe</button>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Header)
