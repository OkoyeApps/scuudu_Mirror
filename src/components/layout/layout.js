import React from 'react'
import Header from '../header/header'
import NewFooter from '../footer/newFooter'
import scrollDown from '../../assets/images/scrolldowm.svg'
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <div>
                <div className="scroll"><img src={scrollDown} alt="scroll indicator" /></div>
                {props.children}
            </div>
            <div>
                <NewFooter />
            </div>
        </div>
    )
}

export default Layout
