import { useState , useEffect } from 'react';
import '../styles/main.css'

export default function Main() {

    const [pc , setPc] = useState(true);
    const [load , setLoad] = useState(false);
    const [car , setCar ] = useState({
      car1: 0,
      car2: 0,
      car3: 0
    })

    useEffect(()=>{
      setLoad(true);

      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setCar({
          car1: scrollTop*3,
          car2: scrollTop*1.6,
          car3: scrollTop*2
        })
      };
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setPc(true);
        }else{
          setPc(false);
        }
      };
      handleResize();
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    },[])

    return (
      <main className={load ? "main on" : "main"}>
        <h3 className="hidden">MAIN</h3>
        <div className="mainInner">
            <h4><span>DRIVE, </span><span>SAFE, </span><span>EARN</span></h4>
            <p><span>SRC</span><span>Turn your daily driving<br/>into passive income.</span></p>
            <ul className="mainAppBtn">
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
        <div className="road">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {
            pc && <span></span>  
          }
        </div>
        <div className="car">
          <img src='/assets/icons/main/car_black.png' alt="검정색 차" style={{transform: `translateY(-${car.car1}px)`}}/>
          <img src='/assets/icons/main/car_blue.png' alt="파란색 차" style={{transform: `translateY(-${car.car2}px)`}} />
          <img src='/assets/icons/main/car_pink.png' alt="핑크색 차" style={{transform: `translateY(-${car.car3}px)`}} />
        </div>
      </main>
    );
  }
