import '../styles/roadmap.css'

export default function RoadMap() {

    const Data = [
        {
            title: '2022 Q3',
            description: [
                'Initial product design addressing road problems including traffic jam and speeding.',
                'Investigation of development feasibility for the product concept.',
                'Collection of road data and evaluation of GPS on collected data.'
            ],
            src: '2022_Q3.svg'
        },
        {
            title: '2022 Q4',
            description: [
                'Formation of development team: App dev, web front, server dev and blockchain.',
                'Developments of Road DB, GPS Verification, Backend service and Tester app.',
            ],
            src: '2022_Q4.svg'
        },
        {
            title: '2023 Q1',
            description: [
                'Publication of SRC white paper',
                'Open home page.',
                'NFT Development',
                'Build first collection of NFT',
                'NFT Development'
            ],
            src: '2023_Q1.svg'
        },
        {
            title: '2023 Q2',
            description: [
                'App feature demonstration - Driver GPS tracking and enable rewarding.',
                'Tester app release for iOS Testflight and Android Closed Testing.',
                'Internal and closed group testing',
                'Enhancement of game design and economy',
                'Game design simulation'
            ],
            src: '2023_Q2.svg'
        },
        {
            title: '2023 Q3',
            description: [
                'Start community building: Telegram, Discord, and Twitter.',
                'Open home page.',
                'Development of Open beta app'
            ],
            src: '2023_Q3.svg'
        },
        {
            title: '2023 Q4',
            description: [
                'Release SRC App.',
                'SMT listing on CEX',
                'Business affiliates to SRC app and SRC communities'
            ],
            src: '2023_Q4.svg'
        },
        {
            title: '2024 Q1',
            description: [
                'NFT sales for OG, WL and public rounds',
                'Release SRC App.',
                'Implement in app marketplace.'
            ],
            src: '2024_Q1.svg'
        },
    ]
    return (
        <section className="RoadMap">
            <div className="RoadMapInner">
                <h3>ROAD MAP</h3>
                <ul className="RoadMapList">
                    {
                        Data &&
                        Data.map(el =>{
                            return (
                                <li key={el.title}>
                                    <div className="RoadMapIcon">
                                        <img src={`/assets/icons/roadmap/${el.src}`} alt="로드맵 아이콘"/>
                                    </div>
                                    <h4>{el.title}</h4>
                                    <ul className="RoadMapContent">
                                        {
                                            el.description &&
                                            el.description.map(el=>{
                                                return(
                                                    <li key={el}>
                                                        {el}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
  }