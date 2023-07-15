import { useState } from 'react';
import '../styles/main.css'

export default function Main() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
      <main className="main">
        <div className="mainInner">
            <div className="mainAni">
              <ul className="mainTitle">
                <li>
                  <h3>DRIVE</h3>
                </li>
                <li>
                  <h3>SAFETY</h3>
                </li>
                <li>
                  <h3>EARN</h3>
                </li>
              </ul>
              <div className="road">
                <span className="roadSide"></span>
                <ul className="roadMiddle">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <span className="roadSide"></span>
              </div>
            </div>
            <div className="mainInfo">
              <ul className="mainAppBtn">
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
              <p>Turn your daily driving into passive income.</p>
            </div>
            <ul className="carAnimaition">
              <li>
                {/* <img src="/assets/icons/main/Main_animaition_2.svg" alt="car svg"/> */}
              </li>
              <li>
                <img className="car1" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car2" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car3" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car4" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car5" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car6" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car7" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car8" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
                <img className="car9" src="/assets/icons/main/Main_animaition_1.svg" alt="car svg"/>
              </li>
            </ul>
        </div>
      </main>
    );
  }
