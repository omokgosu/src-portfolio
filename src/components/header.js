import React, { useState , useEffect } from 'react';
import '../styles/header.css'

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 1400) {
            setIsNavOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      <header className="header">
        <div className="headerInner">
            <h1><span className="hidden">SRC 로고</span></h1>
            <button type="button" className="app_btn"><span>DOWNLOAD THE APP FOR A PASSIVE INCOME</span></button>
            <button type="button" className="mobile_btn" onClick={toggleNav}></button>
            <div className="menu">
              <div className="menuInner">
                <nav className={isNavOpen ? 'on' : ''}>
                    <h2 className="hidden">네비게이션 영역</h2>
                    <ul>
                        <li><a href="#howto"><span>HOME</span></a></li>
                        <li><a href="#RoadMap"><span>HOW TO GET</span></a></li>
                        <li><a href="#Sustain"><span>GAME ECONOMY</span></a></li>
                        <li><a href="#Team"><span>ROADMAP</span></a></li>
                        <li><a href="#Team"><span>TEAM</span></a></li>
                    </ul>
                </nav>
                <ul className="sns">
                    <li>
                        <span className='hidden'>디스코드</span>
                    </li>
                    <li>
                        <span className='hidden'>백서</span>
                    </li>
                    <li>
                        <span className='hidden'>트위터</span>
                    </li>
                </ul>
              </div>
            </div>
        </div>
      </header>
    );
  }
