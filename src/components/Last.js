import {useState } from 'react';
import '../styles/last.css'

export default function Last() {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <section className="Last">
            <div className="LastInner">
                <div className="LastTitle">
                    <p>TURN YOUR DAILY DRIVING<br/>INTO PASSIVE INCOME</p>
                    <ul className="LastAppBtn">
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src='/assets/icons/main/play_store.svg' alt="플레이스토어 이미지"/>
                                <span>PLAY STORE</span>
                                <img className="arrow" src='/assets/icons/main/app_arrow.svg' alt="화살표"/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >   
                                <img src='/assets/icons/main/app_store.svg' alt="앱스토어 이미지"/>
                                <span>APP STORE</span>
                                <img className="arrow" src='/assets/icons/main/app_arrow.svg' alt="화살표"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="imgArea">
                    <img src ="/assets/images/last/SDT.png" alt="SDT"/>
                    <img src="/assets/images/last/last_app.png" alt="APP" />
                    <img src ="/assets/images/last/SMT.png" alt="SMT"/>
                </div>
            </div>
        </section>
    );
  }