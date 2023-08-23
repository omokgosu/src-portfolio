import '../styles/footer.css'

export default function Footer({
    alertArea
}) {

    return (
        <footer className="footer">
            <div className="footerInner">
                <div className="footerLeft">
                    <div className="leftLink">
                        <img src='/Logo.svg' alt="로고" />
                        <ul>
                            <li><a href="https://saferoadclub.app/">Home</a></li>
                            <li><a href="#howto">How to get</a></li>
                            <li><a href="#Sustain">Game economy</a></li>
                            <li><a href="#RoadMap">Roadmap</a></li>
                            <li><a href="#Team">Team</a></li>
                            <li><a 
                                    href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        alertArea();
                                    }}>
                                    Download App
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="leftCopy">
                        <p>SRC is an NFT APP designed to contribute to a safe driving culture and a safe road environment</p>
                        <address>COPYRIGHT 2023 SRC Universe CORP. ALL RIGHTS RESERVED I POWERED BY SRC Universe CORP.</address>
                    </div>
                </div>
                <div className="footerRight">
                    <ul className="footerSns">
                        <li>
                            <a 
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer" 
                            >
                            <span className='hidden'>깃북</span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer" 
                            onClick={(e)=>{
                                e.preventDefault();
                                alertArea();
                              }}
                            >
                            <span className='hidden'>트위터</span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer" 
                            onClick={(e)=>{
                                e.preventDefault();
                                alertArea();
                              }}
                            >
                            <span className='hidden'>오픈씨</span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer" 
                            onClick={(e)=>{
                                e.preventDefault();
                                alertArea();
                              }}
                            >
                            <span className='hidden'>오픈씨</span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer" 
                            onClick={(e)=>{
                                e.preventDefault();
                                alertArea();
                              }}
                            >
                            <span className='hidden'>텔레그램</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="introduce">
                        <li>
                        <a  
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Whitepaper
                        </a>
                        </li>
                        <li>
                        <a  
                            href="https://saferoadclub.gitbook.io/safe-road-club-open-beta/"
                            target="_blank"
                            rel="noopener noreferrer" 
                            onClick={(e)=>{
                                e.preventDefault();
                                alertArea();
                              }}>
                            Privacy policy
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }