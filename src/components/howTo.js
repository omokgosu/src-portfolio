import { useState , useEffect , useRef } from 'react';

import '../styles/howto.css';

export default function Howto() {
  
  const howtoRef = useRef(null);
  const [current , setCurrent] = useState(1);

  useEffect(()=>{

    const handleScroll = () => {
      const howto = howtoRef.current
      const scroll = document.documentElement.scrollTop;
      const innerHeight = window.innerHeight/1.5;
      const ElmentHeight = howto.offsetHeight;
      const offsetTop = howto.offsetTop;

      if(scroll > offsetTop - innerHeight) setCurrent(1);
      if(scroll > offsetTop + ElmentHeight/3 - innerHeight) setCurrent(2);
      if(scroll > offsetTop + ElmentHeight/3*2 - innerHeight) setCurrent(3);
    }

    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  const leftClick = (current) => {
    const howto = howtoRef.current
    const ElmentHeight = howto.offsetHeight;
    const offsetTop = howto.offsetTop;
    if(current === 1){
      return
    }
    if(current === 2){
      setCurrent(1);
      window.scrollTo({
        top: offsetTop
      })
      return
    }
    if(current === 3){
      setCurrent(2);
      window.scrollTo({
        top: offsetTop + ElmentHeight/3
      })
    }
  }

  const rightClick = (current) => {
    const howto = howtoRef.current
    const ElmentHeight = howto.offsetHeight;
    const offsetTop = howto.offsetTop;
    if(current === 1){
      setCurrent(2);
      window.scrollTo({
        top: offsetTop + ElmentHeight/3
      })
      return
    }
    if(current === 2){
      setCurrent(3);
      window.scrollTo({
        top: offsetTop + ElmentHeight/3*2
      })
      return
    }
    if(current === 3){
      return
    }
  }

  const [ pc , setPc] = useState(null);
  const [ mobile, setMobile ] = useState(null);

  const mo1 = useRef(null);

  useEffect(()=>{

    const currentType = () => {
      if(window.innerWidth > 768){
        setPc(true);
        setMobile(false);
      }else{
        setPc(false);
        setMobile(true);
      }
    }

    currentType();
    window.addEventListener('resize',currentType);

    return () => {
      window.removeEventListener('resize',currentType);
    }
  },[]);


  return (
    <section ref={howtoRef} id="howto">
      <h3 className="hidden">HOW TO</h3>
      <div className="howtoInner">
        {mobile && <h4>HOW TO<br/>GET REWARD</h4>}
        <div className="howtoView">
          {
            pc &&
            <>
              <div className={current === 1 ? "howtoView_1 active" : "howtoView_1"}>
                <img className="earn1" src="/assets/images/howto/EARN_PC.png" alt="get token"/>
                <video className="earnVideo" autoPlay muted loop content='false'>
                  <source src="/assets/images/howto/media_line01.mp4" type="video/mp4"></source>
                </video>
              </div>
              <div className={current === 2 ? "howtoView_2 active" : "howtoView_2"}>
                <img className="nft1" src="/assets/images/howto/NFT_PC.png" alt="get token"/>
                <video className="earnVideo" autoPlay muted loop content='false'>
                  <source src="/assets/images/howto/media_line02.mp4" type="video/mp4"></source>
                </video>
              </div>
              <div className={current === 3 ? "howtoView_3 active" : "howtoView_3"}>
                <img className="recharge1" src="/assets/images/howto/RECHARGE_PC.png" alt="get token"/>
                <video className="earnVideo" autoPlay muted loop content='false'>
                  <source src="/assets/images/howto/media_line03.mp4" type="video/mp4"></source>
                </video>
              </div>
            </>
          }
          {
            mobile && <>
              <div className={current === 1 ? "howtoView_1 active" : "howtoView_1"}>
                <img className="earn1" src="/assets/images/howto/EARN_MOBILE.png" alt="get token"/>
                <video ref={mo1} className="earnVideo" autoPlay muted loop content='false'>
                  <source src="/assets/images/howto/mo_media_line01.mp4" type="video/mp4"></source>
                </video>
              </div>
              <div className={current === 2 ? "howtoView_2 active" : "howtoView_2"}>
                <img className="nft1" src="/assets/images/howto/NFT_MOBILE.png" alt="get token"/>
                <video className="earnVideo" autoPlay muted loop content='false'>
                  <source src="/assets/images/howto/mo_media_line02.mp4" type="video/mp4"></source>
                </video>
              </div>
              <div className={current === 3 ? "howtoView_3 active" : "howtoView_3"}>
                <img className="recharge1" src="/assets/images/howto/RECHARGE_mobile.png" alt="get token"/>
                <video className="earnVideo" autoPlay muted loop content='false'>
                  <source src="/assets/images/howto/mo_media_line03.mp4" type="video/mp4"></source>
                </video>
              </div>
            </>
          }
        </div>
        <div className="howtoInfo">
          {pc && <h4>HOW TO<br/>GET REWARD</h4>}
          <div className="howtoBottom">
            <div className="howtoText">
              <div className={current === 1 ? "text_earn" : "text_earn hidden"}>
                <h5>01_EARN</h5>
                <p>Earn rewards in $SDT and $SMT<br/>by driving recommended speed<br/>in the road. </p>
              </div>
              <div className={current === 2 ? "text_nft" : "text_nft hidden"}>
                <h5>02_UPGRADE NFT</h5>
                <p>Upgrade your NFT to enable guaranteed driving rewards<br/>and reduce repair costs</p>
              </div>
              <div className={current === 3 ? "text_recharge" : "text_recharge hidden"}>
                <h5>03_RECHARGE</h5>
                <p>Guarantee rewards in your driving at any road<br/>and any condition</p>
              </div>
            </div>
            <div className="howtoBtn">
              <button className="left" type="button" onClick={()=>leftClick(current)}><span className="hidden">left</span></button>
              <div className="howtoPage">
                <span>0{current} /</span>
                <span> 03</span>
              </div>
              <button className="right" type="button" onClick={()=>rightClick(current)}><span className="hidden">right</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}