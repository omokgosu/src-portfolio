import React, {useState , useRef, useEffect} from 'react';
import '../styles/last.css'
import Top from './top';

export default function Last({
    alertArea
}) {

    const lastRef = useRef(null);
    const [percent , setPercent ] = useState(100);

    useEffect(()=>{
        const layout = lastRef.current;
        
        const lastScroll = () => {
            const scroll = document.documentElement.scrollTop;
            const height = layout.offsetHeight;
            const triger = layout.offsetTop - height;

            if(scroll > triger){
                const num = ((scroll-triger)/height*100).toFixed(2);
                if(num > 100){
                    return
                }

                let number = Math.abs(num-100);
                setPercent(number);
            }
        }

        window.addEventListener('scroll',lastScroll);

        return () => {
            window.removeEventListener('scroll',lastScroll)
        }
    },[])
    
    return (
        <section ref={lastRef} className="Last" style={{transform: `translateY(-${percent}%)`}}>
            <h3 className="hidden">LAST SECTION</h3>
            <div className="LastInner">
                <div className="LastTitle">
                    <p>TURN YOUR DAILY DRIVING<br/>INTO PASSIVE INCOME</p>
                    <ul className="LastAppBtn">
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
                                <span>PLAY STORE</span>
                                <img className="arrow" src='/assets/icons/main/app_arrow.svg' alt="화살표"/>
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
                                <img src='/assets/icons/main/app_store.svg' alt="앱스토어 이미지"/>
                                <span>APP STORE</span>
                                <img className="arrow" src='/assets/icons/main/app_arrow.svg' alt="화살표"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="imgArea">
                    <img src ="/assets/images/last/SDT.png" alt="SDT"/>
                    <img src="/assets/images/last/last_app.png" alt="APP" />
                    <img src ="/assets/images/last/SMT.png" alt="SMT"/>
                </div>
            </div>
            <Top />
        </section>
    );
  }