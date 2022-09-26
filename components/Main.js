import React from 'react';

export default function Main() {
    return (
        <div className="main-section">
            <section className="bio-data">
                <h3>Charles Ukasoanya</h3>
                <h4>Frontend Developer</h4>
                <a href="https://ukasoanya.com">ukasoanya.com</a>
                
                <div className="bio-buttons">
                    <a href="mailto: c_ukasoanya@yahoo.com" className="bio-buttons-email">
                        <span>
                            <img src="../images/email.png" alt="email image" className="bio-buttons-image"/>
                        </span>
                        <span className="bio-buttons-text">Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ukasoanya-charles/" className="bio-buttons-linkedin">
                        
                        <img src="../images/linkedin.png" alt="linkedin image" className="bio-buttons-image"/>
                        
                        <span className="bio-buttons-text">Linkedin</span>
                    </a>
                </div>
            </section>            
            
            <section className="about-section">
                <h3 className="section-title">About</h3>
                <p className="section-text">I'm a frontend developer and technologist with particular interest in making apps that simplify day to day tasks. I use the javascript stacks of React js and Node js to carry out my software development. I pay close attention to industry trends, keep up with sucrity and best practices and am always open to learn new things everyday.</p>
            </section>
            
            <section className="interests-section">
                <h3 className="section-title">Interests</h3>
                <p className="section-text">Football. Music. Reader. Internet fanatic. Aviation Enthusiast. Entrepreneur. Coffee fanatic.</p>
            </section>
        </div>
    )
}