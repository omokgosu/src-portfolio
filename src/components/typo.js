import React, { useState , useEffect, useRef } from 'react';
import '../styles/typo.css'

export default function Typo({
  alertArea
}){ 
  
    const [load , setLoad] = useState(false);
    const typoRef = useRef(null);
    useEffect(()=>{
      const handleScroll = () => {
        const scroll = document.documentElement.scrollTop;
        const height = window.innerHeight;
        const current = typoRef.current.offsetTop;
        
        if(scroll > current-height){
          setLoad(true);
        }
        if(scroll < current-height+100){
          setLoad(false);
        }
      }
      window.addEventListener('scroll',handleScroll)

      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
    },[])

    return (
        <section ref={typoRef} className={load ? "typo on" : "typo"}>
          <h3 className="hidden">TYPO</h3>
          <div className="typoInner">
            <h4>GET TOKEN REWARDS</h4>
            <div className="typoApp">
              <p>ON THE APP</p>
              <ul className="typoAppBtn">
                <li>
                  <a 
                      href="https://testflight.apple.com/join/a2eEql39"
                      target="_blank"
                      rel="noopener noreferrer" onClick={(e)=>{
                        e.preventDefault();
                        alertArea();
                      }}
                  >   
                      <img src='/assets/icons/main/app_store_black.svg' alt="앱스토어 이미지"/>
                      <span className="hidden">APP STORE</span>
                  </a>
                </li>
                <li>
                    <a 
                        href="https://testflight.apple.com/join/a2eEql39"
                        target="_blank"
                        rel="noopener noreferrer" onClick={(e)=>{
                          e.preventDefault();
                          alertArea();
                        }}
                    >
                        <img src='/assets/icons/main/play_store.svg' alt="플레이스토어 이미지"/>
                        <span className="hidden">PLAY STORE</span>
                    </a>
                </li>
              </ul>
            </div>
            <div className="typoRoad">
              <span className="side"></span>
              <span className="middle"></span>
              <span className="side"></span>
            </div>
          </div>
        </section>
    );
  }