import '../styles/sustain.css'

export default function Sustain() {

    return (
        <section id="Sustain">
            <div className="SustainInner">
                <h3>SUSTAINABLE GAME ECONOMY</h3>
                <div className="SustainInfo">
                    <img src="/assets/images/sustain/sustain_image.png" alt="NFT 관련 설명"/>
                    <p className="hidden">도로에서 일정 속도 이하로 운행하면 리워드를 지급합니다. 이 리워드를 통해서
                        NFT 차량의 타이어를 Repair 하거나 아이템을 얻을 수 있습니다. NFT 의 카운트가 늘어나면 모인 NFT를 통해서 레벨업을 시도할 수 있습니다.    
                    </p>
                </div>
                <ul>
                    <li>
                        <span>SUPPLY</span>
                    </li>
                    <li>
                        <span>BURNING</span>
                    </li>
                </ul>
            </div>
        </section>
    );
  }