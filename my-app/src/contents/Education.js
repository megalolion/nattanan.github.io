import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="MilerDev Software Engineering" where="Miler Univercity" from="2016" to="2018" />
                <Widecard title="MilerDev " where="Miler High School" from="2011" to="2016" />

            </div>
        )
    }
}

export default Education;