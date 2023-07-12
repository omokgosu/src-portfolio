import React, { useEffect, useState } from 'react';
import '../styles/typo.css'

export default function Typo(){ 
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const typoElement = document.querySelector('.typo');
        const offsetTop = typoElement.offsetTop;
  
        // 현재 스크롤 위치가 offsetTop - 50vh보다 크면 클래스를 추가하고, 그렇지 않으면 클래스를 제거합니다.
        if (window.pageYOffset > offsetTop - window.innerHeight * 0.5) {
          setIsOn(true);
        } else {
          setIsOn(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <section className={`typo ${isOn ? 'on' : ''}`}>
            <div className="typoInner">
                <p>SLOW DOWN</p>
                <h3>GET TOKEN<br/>REWARDS ON THE APP</h3>
                <p>AND SAFELY<br/>ON THE ROAD</p>
            </div>
        </section>
    );
  }