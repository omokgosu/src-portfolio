import React, {useState , useRef} from 'react';
import '../styles/team.css'

export default function Team() {

    const team = [
        {
            src: 'lee',
            name: 'HC Lee (lead)',
            Role: 'Product Manager'
        },
        {
            src: 'yohan',
            name: 'Yohan Park',
            Role: 'Product design'
        },
        {
            src: 'joo',
            name: 'Gwanghyun Joo',
            Role: 'Full-stack dev '
        },
        {
            src: 'so',
            name: 'Jungmin So',
            Role: 'App front-end'
        },
        {
            src: 'yubin',
            name: 'Yubin Kim',
            Role: 'Operation/Marketing'
        },
        {
            src: 'jinsung',
            name: 'Jinsung Yang',
            Role: 'Web front-end'
        },
        {
            src: 'dean',
            name: 'Dean Kang',
            Role: 'Blockchain developer'
        },
        {
            src: 'back',
            name: 'Seungho Baek',
            Role: 'Designer'
        },
        {
            src: 'Taemin',
            name: 'Taemin Kim',
            Role: 'Operation'
        },
        {
            src: 'logan',
            name: 'Logan Kim',
            Role: 'Advisor'
        }
    ]

    const containerRefs = useRef([]);
    const [tilt, setTilt] = useState([]);
  
    const handleMouseMove = (event, index) => {
      const containerRect = containerRefs.current[index].getBoundingClientRect();
      const mouseX = event.clientX - containerRect.left;
      const mouseY = event.clientY - containerRect.top;
      const centerX = mouseX - containerRect.width / 2;
      const centerY = mouseY - containerRect.height / 2;
      const d = Math.sqrt(centerX ** 2 + centerY ** 2);
  
      const updatedTilt = [...tilt];
      updatedTilt[index] = {
        x: -centerY / 100,
        y: -centerX / 100,
        z: d / 10
      };
      setTilt(updatedTilt);
    };
  
    const handleMouseLeave = (index) => {
      const updatedTilt = [...tilt];
      updatedTilt[index] = { x: 0, y: 0, z: 0 };
      setTilt(updatedTilt);
    };

    return (
        <section id="Team">
            <div className="TeamInner">
                <h3 className="hidden">TEAM</h3>
                <ul className="member">
                {team &&
                    team.map((el, i) => {
                    return (
                        <li key={el.src}>
                        <div
                            ref={(element) => (containerRefs.current[i] = element)}
                            onMouseMove={(e) => handleMouseMove(e, i)}
                            onMouseLeave={() => handleMouseLeave(i)}
                        >
                            <img
                            src={`/assets/images/team/team_${el.src}.png`}
                            alt={el.name}
                            style={{
                                transform: `rotate3d(${tilt[i]?.y || 0}, ${tilt[i]?.x || 0}, 0, ${tilt[i]?.z || 0}deg)`
                            }}
                            />
                        </div>
                        <dl>
                            <dt>{el.name}</dt>
                            <dd>{el.Role}</dd>
                        </dl>
                        </li>
                    );
                    })}
                </ul>
            </div>
        </section>
    );
  }