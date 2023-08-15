import React, {useState, useEffect} from 'react';
import '../styles/sustain.css'

export default function Sustain() {

    const [ pc , setPc ] = useState(null);
    const [ mobile , setMobile ] = useState(null);

    useEffect(()=>{
        
        const handleResize = () => {

            if(window.innerWidth > 640){
                setPc(true);
                setMobile(false);
            }else{
                setPc(false);
                setMobile(true);
            }
        }

        handleResize();
        window.addEventListener('resize',handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[])
    return (
        <section id="Sustain">
            <h3 className='hidden'>SUSTAINABLE GAME ECONOMY</h3>
            <div className="SustainInfo">
                { pc && <img src="/assets/images/sustain/Sustain.png" alt="NFT 관련 설명"/>}
                { mobile && <img src="/assets/images/sustain/mo_sustain.png" alt="NFT 관련 설명"/>}
                
                <p className="hidden">도로에서 일정 속도 이하로 운행하면 리워드를 지급합니다. 이 리워드를 통해서
                    NFT 차량의 타이어를 Repair 하거나 아이템을 얻을 수 있습니다. NFT 의 카운트가 늘어나면 모인 NFT를 통해서 레벨업을 시도할 수 있습니다.    
                </p>
            </div>
        </section>
    );
  }