import React from 'react'
import logo from "../Assets/LogoBlanc.png"
import "../Styles/Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo de bas de page' /></div>
            <div className='arr'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer