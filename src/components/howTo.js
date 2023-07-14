import { useState, useEffect, useRef } from 'react';

import '../styles/howto.css';

export default function Howto() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const howtoLayoutRef = useRef(null);
  const howtoRef = useRef(null);
  const howtoTextRef = useRef(null);
  const howtoBackRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setCurrentScroll(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const listItems = howtoLayoutRef.current.querySelectorAll('li');
    const windowHeight = window.innerHeight;

    listItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemTop = rect.top + window.pageYOffset;
      const itemBottom = rect.bottom + window.pageYOffset;

      if (currentScroll > itemTop - windowHeight/2 && currentScroll < itemBottom - windowHeight/2) {
        setActiveIndex(index);
      }
    });

    const firstItemTop = listItems[0].getBoundingClientRect().top + window.pageYOffset;
    const lastItemTop = listItems[listItems.length - 1].getBoundingClientRect().top + window.pageYOffset;

    if(currentScroll < firstItemTop){
        howtoTextRef.current.className="textFix"
        howtoBackRef.current.className="howtoBack"
    }
    if (currentScroll >= firstItemTop) {
        howtoTextRef.current.className="textFix active"
        howtoBackRef.current.className="howtoBack active"
    }
    if (currentScroll >= lastItemTop) {
        howtoTextRef.current.className="textFix finish"
        howtoBackRef.current.className="howtoBack finish"
    }
  }, [currentScroll]);

  return (
    <section id="howto" ref={howtoRef}>
      <div className="howtoInner">
        <h3 className="hidden">How to</h3>
        <div className="howtoLayout" ref={howtoLayoutRef}>
          <div className="textFix" ref={howtoTextRef}>
            <h4>{Data[activeIndex].title}</h4>
            <p>{Data[activeIndex].description}</p>
          </div>
          <ul>
            {Data &&
              Data.map((el, index) => {
                return (
                  <li key={index}>
                    <img src={`/assets/images/howto/${el.src}`} alt={el.title} />
                  </li>
                );
              })}
          </ul>
          <div className="howtoBack" ref={howtoBackRef}></div>
        </div>
      </div>
    </section>
  );
}