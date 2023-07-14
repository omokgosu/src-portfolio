import '../styles/team.css'

export default function Team() {

    const team = [
        {
            src: 'hc_1',
            name: 'HC Lee (lead)',
            Role: 'Product Manager'
        },
        {
            src: 'yohan_1',
            name: 'Yohan Park',
            Role: 'Product design'
        },
        {
            src: 'joo_1',
            name: 'Gwanghyun Joo',
            Role: 'Full-stack dev '
        },
        {
            src: 'jungmin_1',
            name: 'Jungmin So',
            Role: 'App front-end'
        },
        {
            src: 'yubin_1',
            name: 'Yubin Kim',
            Role: 'Operation/Marketing'
        },
        {
            src: 'jinsung_1',
            name: 'Jinsung Yang',
            Role: 'Web front-end'
        },
        {
            src: 'dean_1',
            name: 'Dean Kang',
            Role: 'Blockchain developer'
        },
        {
            src: 'seungho_1',
            name: 'Seungho Baek',
            Role: 'Designer'
        },
        {
            src: 'Taemin_1',
            name: 'Taemin Kim',
            Role: 'Operation'
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