import React, {useState , useEffect, useRef} from 'react';
import '../styles/slide.css'

export default function Slide() {
      
    return (
        <div className="TeamSlide">
            <ul>
                <li>
                    <p>MEET OUR TEAM</p>
                    <img src="/assets/images/team/star.svg" alt="별"/>
                </li>
                <li>
                    <p>MEET OUR TEAM</p>
                    <img src="/assets/images/team/star.svg" alt="별"/>
                </li>
                <li>
                    <p>MEET OUR TEAM</p>
                    <img src="/assets/images/team/star.svg" alt="별"/>
                </li>
            </ul>
        </div>
    );
  }