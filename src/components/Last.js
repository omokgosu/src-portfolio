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
                    <p>Turn your daily driving into passive income.</p>
                    <ul className="LastAppBtn">
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src='/assets/icons/main/play_store.svg' alt="플레이스토어 이미지"/>
                                <span>PLAY STORE</span>
                            </a>
                        </li>
                        <li
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} 
                        >
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >   
                                <img src={isHovered ? '/assets/icons/main/app_store_black.svg' : '/assets/icons/main/app_store.svg'} alt="앱스토어 이미지"/>
                                <span>APP STORE</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <img src="/assets/images/last/last_app.png" alt="APP" />
            </div>
        </section>
    );
  }