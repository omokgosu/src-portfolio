import React, { useState , useEffect } from 'react';
import '../styles/header.css'

export default function Header({
  alertArea
}) {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [is1400 , setIs1400] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
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
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      <header className={isNavOpen ? 'header on' : 'header'}>
        <div className="headerInner">
            <h1 className={is1400 ? 'hidden' : ''}><a href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"><span className="hidden">SRC 로고</span></a></h1>
            <div className="headerBtn">
              <button type="button" className={is1400 ? 'hidden' : 'appBtn'} onClick={alertArea}><span>DOWNLOAD THE APP FOR A PASSIVE INCOME DOWNLOAD THE APP FOR A PASSIVE INCOME</span></button>
              <button type="button" className={isNavOpen ? 'mobileBtn on' : 'mobileBtn'} onClick={toggleNav}></button>
            </div>
            <div className={isNavOpen ? 'menu on' : 'menu'}>
              <div className="menuInner">
                <nav>
                    <h2 className="hidden">네비게이션 영역</h2>
                    <ul>
                        <li><a href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/" onClick={toggleNav}><span>HOME</span></a></li>
                        <li><a href="#howto" onClick={toggleNav}><span>HOW TO GET</span></a></li>
                        <li><a href="#Sustain" onClick={toggleNav}><span>GAME ECONOMY</span></a></li>
                        <li><a href="#RoadMap" onClick={toggleNav}><span>ROADMAP</span></a></li>
                        <li><a href="#Team" onClick={toggleNav}><span>TEAM</span></a></li>
                    </ul>
                </nav>
                <div className="navLink">
                  <ul className="sns">
                      <li>
                        <a 
                          href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e)=>{
                            e.preventDefault();
                            alertArea();
                          }}
                        >
                          <span className='hidden'>깃북</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e)=>{
                            e.preventDefault();
                            alertArea();
                          }}
                        >
                          <span className='hidden'>트위터</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e)=>{
                            e.preventDefault();
                            alertArea();
                          }}
                        >
                          <span className='hidden'>오픈씨</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e)=>{
                            e.preventDefault();
                            alertArea();
                          }}
                        >
                          <span className='hidden'>오픈씨</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e)=>{
                            e.preventDefault();
                            alertArea();
                          }}
                        >
                          <span className='hidden'>텔레그램</span>
                        </a>
                      </li>
                  </ul>
                  <ul className="introduce">
                    <li>
                      <a  
                        href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                        target="_blank"
                        rel="noopener noreferrer">
                          Whitepaper
                      </a>
                    </li>
                    <li>
                      <a  
                        href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e)=>{
                          e.preventDefault();
                          alertArea();
                        }}>
                          Privacy policy
                      </a>
                    </li>
                  </ul>
                  <p>COPYRIGHT 2023 SRC UNIVERSE CORP. ALL RIGHTS RESERVED<br/>I POWERED BY SRC CORP.</p>
                </div>
              </div>
            </div>
        </div>
      </header>
    );
  }
