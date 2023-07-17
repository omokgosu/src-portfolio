import '../styles/team.css'

export default function Team() {

    const team = [
        {
            src: 'hc',
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
            src: 'jungmin',
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
            src: 'seungho',
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

    return (
        <section id="Team">
            <div className="TeamInner">
                <h3>TEAM</h3>
                <ul className="member">
                    {
                        team &&
                        team.map(el =>{
                            return(
                                <li key={el.src}>
                                    <img src={`/assets/images/team/team_${el.src}.png`} alt={el.name}/>
                                    <dl>
                                        <dt>{el.name}</dt>
                                        <dd>{el.Role}</dd>
                                    </dl>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
  }