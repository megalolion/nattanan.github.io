import React from 'react'
import "./CallToAction.css"
import { FiCode } from 'react-icons/fi'

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay">
                <div className="container">
                    <div className="cta-text">
                        <FiCode/>
                        <h2>
                            We're react dev team
                        </h2>
                        <p>Lorem ex irure Lorem commodo aliquip labore in. Reprehenderit aliquip id ullamco ut exercitation exercitation aliqua ipsum sunt reprehenderit sunt. Deserunt ipsum tempor qui cillum</p>
                            <a href="https://www.google.com/?hl=th" className="cta-btn">get to know us</a>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
