import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div class="header">
                <Header />
            </div>
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
