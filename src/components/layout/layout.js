import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import scrollDown from '../../assets/images/scrolldowm.svg'
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <div>
                <div className="scroll"><img src={scrollDown} /></div>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
