import {useState , useEffect , useRef} from 'react';
import '../styles/roadmap.css';

export default function RoadMap() {

    const [pc , setPc] = useState(null);
    const [mobile, setMobile] = useState(null);

    const RoadRef = useRef(null);
    const innerRef = useRef(null);
    const whiteRef = useRef(null);
    const colorRef= useRef(null);
    const colorLayout = useRef(null);

    const moWhiteRef = useRef(null);
    const moColorRef = useRef(null);
    const moColorLayout = useRef(null);
    
    useEffect(()=>{
        if(pc && RoadRef.current && innerRef.current){
            RoadRef.current.style.height = innerRef.current.offsetWidth+'px';
        }
        const handleScroll = () => {
            const scroll = document.documentElement.scrollTop;
            const offset = RoadRef.current.offsetTop;
            const max = offset + innerRef.current.offsetWidth;
            const scrollDistance = scroll - offset;

            if(pc && RoadRef.current && innerRef.current){
                RoadRef.current.style.height = `${innerRef.current.offsetWidth+200}px`;
            }
            if(pc){
                if (scroll > offset && scroll < max) {
                    innerRef.current.style.transform = `translateX(-${scrollDistance}px)`;
                    colorLayout.current.style.width = `${scrollDistance}px`;
                    colorRef.current.style.width = whiteRef.current.offsetWidth + 'px';
                }
                if(scroll < offset){
                    innerRef.current.style.transform = `translateX(0)`;
                    colorLayout.current.style.width = `0`
                }
            }
            if(mobile){
                RoadRef.current.style.height = 'auto';
                innerRef.current.style.transform = `translateX(0)`;

                if (scroll > offset - window.innerHeight/2 && scroll < max+window.innerHeight/2 ) {
                    const moDistance = scroll - (offset-window.innerHeight/2);
                    moColorLayout.current.style.height = `${moDistance}px`;
                    moColorRef.current.style.width = moWhiteRef.current.offsetWidth+'px';
                    moColorRef.current.style.height = moWhiteRef.current.offsetHeight+'px';
                }
                if(scroll < offset - window.innerHeight/2){
                    moColorLayout.current.style.height = `0`
                }
            }
        };
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[pc,mobile])


    useEffect(() => {
        const currentDevice = () => {
            if (pc && colorRef.current && whiteRef.current) {
                colorRef.current.style.width = whiteRef.current.offsetWidth + 'px';
            }
            if (window.innerWidth > 768) {
                setPc(true);
                setMobile(false);
            }else{
                setPc(false);
                setMobile(true);
            }
        };
        currentDevice();
    
        window.addEventListener('resize', currentDevice);
    
        return () => {
            window.removeEventListener('resize', currentDevice);
        };
    }, [pc,mobile]);
    
    return (
        <section ref={RoadRef} id="RoadMap">
            <div className="stickyContainer">
                <div ref={innerRef} className="RoadMapInner">
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
                        <img ref={whiteRef} className="white" src="/assets/images/roadmap/white_line.png" alt="white_image" />
                        <div ref={colorLayout} className="colorLayout">
                            <img ref={colorRef} className="color" src="/assets/images/roadmap/color_line.png" alt="color_image" />
                        </div>
                        <img ref={moWhiteRef} className="moWhite" src="/assets/images/roadmap/mo_white_line.png" alt="mo_white_image" />
                        <div ref={moColorLayout} className="moColorLayout">
                            <img ref={moColorRef} className="moColor" src="/assets/images/roadmap/mo_color_line.jpg" alt="mo_color_image" />
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
  }