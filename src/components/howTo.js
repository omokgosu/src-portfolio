import {  useEffect } from 'react';

import '../styles/howto.css';

export default function Howto() {
  const Data = [
    {
      src: 'EARN_main.png',
      title: 'EARN',
      description: 'Earn rewards in $SDT and $SMT by driving recommended speed in the road.',
    },
    {
      src: 'UPGRADE_main.png',
      title: 'UPGRADE NFT',
      description: 'Upgrade your NFT to enable guaranteed driving rewards and reduce repair costs.',
    },
    {
      src: 'RECHANGE_main.png',
      title: 'RECHANGE',
      description: 'Guarantee rewards in your driving at any road and any condition.',
    },
  ];

  return (
    <section id="howto">
      <h3 className="hidden">HOW TO</h3>
      <div className="howtoInner">
        <div className="howtoView">
          <img className="earn1" src="/assets/images/howto/EARN_PC.PNG" alt="get token"/>
          <img className="earn2" src="/assets/images/howto/EARN_SVG.svg" alt="bounce"/>
          <img className="earn3" src="/assets/images/howto/EARN_SVG_COLOR.svg" alt="bounce"/>
        </div>
        <div className="howtoInfo">
          <h4>HOW TO<br/>GET REWARD</h4>
          <div className="howtoBottom">
            <h5>01_EARN</h5>
            <p>Earn rewards in $SDT and $SMT<br/>by driving recommended speed<br/>in the road. </p>
            <div className="howtoBtn">
              <button className="left" type="button"><span className="hidden">left</span></button>
              <div className="howtoPage">
                <span>01 /</span>
                <span> 03</span>
              </div>
              <button className="right" type="button"><span className="hidden">right</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}