import { useState,useRef,useEffect } from 'react';
import '../styles/main.css'

export default function Main() {

    const [load , setLoad] = useState(false);

    useEffect(()=>{
      setLoad(true);
    },[])

    return (
      <main className={load ? "main on" : "main"}>
        <div className="mainInner">
            <p><span>DRIVE, </span><span>SAFE, </span><span>EARN</span></p>
            <p><span>_SRC</span><span>Turn your daily driving<br/>into passive income.</span></p>
            <ul className="mainAppBtn">
                <li>
                    <a 
                        href="https://testflight.apple.com/join/a2eEql39"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src='/assets/icons/main/play_store.svg' alt="플레이스토어 이미지"/>
                        <span>PLAY STORE</span>
                        <img src='/assets/icons/main/app_arrow.svg' alt="화살표"/>
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
                        <img src='/assets/icons/main/app_arrow.svg' alt="화살표"/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="road">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="car">
          <img src='/assets/icons/main/car_black.png' alt="검정색 차" />
          <img src='/assets/icons/main/car_blue.png' alt="파란색 차" />
          <img src='/assets/icons/main/car_pink.png' alt="핑크색 차" />
        </div>
      </main>
    );
  }
