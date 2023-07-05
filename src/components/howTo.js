import { useState } from 'react';

import '../styles/howto.css'

export default function Howto() {
    const Data = [
        {
            src: 'EARN_main.png',
            title: 'EARN',
            description: 'Earn rewards in $SDT and $SMT by driving recommended speed in the road.'
        },
        {
            src: 'UPGRADE_main.png',
            title: 'UPGRADE NFT',
            description: 'Upgrade your NFT to enable guaranteed driving rewards and reduce repair costs'
        },
        {
            src: 'RECHANGE_main.png',
            title: 'RECHANGE',
            description: 'Guarantee rewards in your driving at any road and any condition'
        }
    ]
    const [currentTab, setCurrentTab] = useState(Data[0])

    return (
        <section className="howto">
            <div className="howtoInner">
                <h3>How to</h3>
                <div className="howtoLayout">
                    <div className="howtoTab">
                        <p>HOW TO</p>
                        <ul>
                            {
                                Data &&
                                Data.map((el,i) =>{
                                    return (
                                        <li 
                                            key={el.title}
                                            className={currentTab.title === el.title ? 'active' : ''}
                                            onClick={()=>setCurrentTab(Data[i])}
                                            >
                                            <button type="button">{el.title}</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <dl>
                        <dt>{currentTab.title}</dt>
                        <dd>{currentTab.description}</dd>
                    </dl>
                    <div className="howtoApp">
                        <img src={`/assets/images/howto/${currentTab.src}`} alt="NFT를 레벨업하여 업그레이드 하세요."/>
                    </div>
                </div>
            </div>
        </section>
    );
  }