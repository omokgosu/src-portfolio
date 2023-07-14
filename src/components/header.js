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
            <nav className={isNavOpen ? 'on' : ''}>
                <h2 className="hidden">네비게이션 영역</h2>
                <button type="button" className="mobile_close_btn" onClick={closeNav}></button>
                <ul>
                    <li><a href="#howto">HOW TO</a></li>
                    <li><a href="#RoadMap">LOAD MAP</a></li>
                    <li><a href="#Sustain">SUSTAIN</a></li>
                    <li><a href="#Team">TEAM</a></li>
                </ul>
            </nav>
            <ul className="sns">
                <li>
                    <span className='hidden'>인스타그램</span>
                </li>
                <li>
                    <span className='hidden'>페이스북</span>
                </li>
                <li>
                    <span className='hidden'>유튜브</span>
                </li>
            </ul>
            <button type="button" className="mobile_btn" onClick={toggleNav}></button>
        </div>
      </header>
    );
  }
