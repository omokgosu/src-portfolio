import '../styles/waiting.css'
//import React , {useState}from 'react';

export default function Waiting() {

    return (
      <div className="wrap">
        <section className="waiting">
            <div className="waitingText">
                <h2>SAFE ROAD CLUB <br/> APP</h2>
                <p>Coming soon</p>
                <p>saferoadclub.app</p>
            </div>    
            <div className="waitingNav">
                <div className="navLink">
                    <img src="/assets/images/waiting/waiting.png" alt="SRC 앱 이미지"/>
                    <ul className="waitingAppBtn">
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >   
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                    target="_blank"
                    rel="noopener noreferrer"
                >https://saferoadclub.gitbook.io/safe-road-club-open-beta/</a>
            </div>
        </section>
      </div>
    );
  }
