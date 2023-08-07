import React, { useState , useEffect } from 'react';
import '../styles/header.css'

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [is1400 , setIs1400] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 1400) {
            // setIsNavOpen(false);
            setIs1400(false);
          }else{
            setIs1400(true);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      <header className={isNavOpen ? 'header on' : 'header'}>
        <div className="headerInner">
            <h1 className={is1400 ? 'hidden' : ''}><span className="hidden">SRC 로고</span></h1>
            <div className="headerBtn">
            <button type="button" className={is1400 ? 'hidden' : 'appBtn'}><span>DOWNLOAD THE APP FOR A PASSIVE INCOME DOWNLOAD THE APP FOR A PASSIVE INCOME</span></button>
            <button type="button" className={isNavOpen ? 'mobileBtn on' : 'mobileBtn'} onClick={toggleNav}></button>
            </div>
            <div className={isNavOpen ? 'menu on' : 'menu'}>
              <div className="menuInner">
                <nav>
                    <h2 className="hidden">네비게이션 영역</h2>
                    <ul>
                        <li><a href="#howto"><span>HOME</span></a></li>
                        <li><a href="#RoadMap"><span>HOW TO GET</span></a></li>
                        <li><a href="#Sustain"><span>GAME ECONOMY</span></a></li>
                        <li><a href="#Team"><span>ROADMAP</span></a></li>
                        <li><a href="#Team"><span>TEAM</span></a></li>
                    </ul>
                </nav>
                <div className="navLink">
                  <ul className="sns">
                      <li>
                          <span className='hidden'>디스코드</span>
                      </li>
                      <li>
                          <span className='hidden'>트위터</span>
                      </li>
                      <li>
                          <span className='hidden'>깃북</span>
                      </li>
                  </ul>
                  <ul className="introduce">
                    <li>
                      <a  
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer">
                          Whitepaper
                      </a>
                    </li>
                    <li>
                      <a  
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer">
                          Privacy policy
                      </a>
                    </li>
                  </ul>
                  <p>COPYRIGHT 2023 SRC CORP. ALL RIGHTS RESERVED<br/>I POWERED BY SRC CORP.</p>
                </div>
              </div>
            </div>
        </div>
      </header>
    );
  }
