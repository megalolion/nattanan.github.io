import React, { Component } from 'react'
import Social from '../components/Social'
import profilepic from '../img/profile.jpg'


import ReactTypingeffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingeffect text={['HI!! I am Nattanan','I Am Web Developer']} speed={80} eraseDelay={200} className="typingeffect"/>
                
               <Social/>
            </div>
          
            
        )
     
    }
}

export default Home;