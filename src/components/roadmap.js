import {useState , useEffect , useRef} from 'react';
import '../styles/roadmap.css';

export default function RoadMap() {

    const handleScroll = () => {
        
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })
    
    return (
        <section id="RoadMap">
            <div className="RoadMapInner">
                <h3>ROAD MAP</h3>
                <ul className="RoadMapList">
                    <li>
                        <h4>2023 Q2</h4>
                        <ul className="RoadMapContent">
                           <li><p>App feature demonstration - Driver GPS tracking and enable rewarding.</p></li>
                           <li><p>Tester app release for iOS Testflight and Android Closed Testing.</p></li>
                           <li><p>Internal and closed group testing</p></li>
                           <li><p>Enhancement of game design and economy</p></li>
                        </ul>
                    </li>
                    <li>
                        <h4>2023 Q3</h4>
                        <ul className="RoadMapContent">
                           <li><p>Start community building: Telegram, Discord, and Twitter.</p></li>
                           <li><p>Open home page.</p></li>
                           <li><p>Development of Open beta app</p></li>
                        </ul>

                    </li>
                    <li>
                        <h4>2023 Q4</h4>
                        <ul className="RoadMapContent">
                           <li><p>Release SRC App.</p></li>
                           <li><p>SMT listing on CEX</p></li>
                           <li><p>Business affiliates to SRC app and SRC communities</p></li>
                        </ul>
                    </li>
                    <li>
                        <h4>2024 Q1</h4>
                        <ul className="RoadMapContent">
                           <li><p>NFT sales for OG, WL and public rounds</p></li>
                           <li><p>Release SRC App.</p></li>
                           <li><p>Implement in app marketplace.</p></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
  }