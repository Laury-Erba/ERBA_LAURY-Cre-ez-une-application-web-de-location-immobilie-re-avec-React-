import React from 'react'
import Navbar from "../Layout/Navbar"
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Cards from '../Components/Cards'

import "../Styles/Home.css"

function Home() {
    return (
        <div role="main">
            
                <Navbar />
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
                <Footer />
            
        
        </div>
    )
}

export default Home