import '../styles/footer.css'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footerInner">
                <div className="footerLeft">
                    <div className="leftLink">
                        <img src='/Logo.svg' alt="로고" />
                        <ul>
                            <li>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    How to get
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Game economy
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Roadmap
                                </a>
                            </li>

                            <li>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Download App
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="leftCopy">
                        <p>SRC is an NFT APP designed to contribute to a healthy driving culture and a safe road environment</p>
                        <address>COPYRIGHT 2023 SRC Universe CORP. ALL RIGHTS RESERVED I POWERED BY SRC Universe CORP.</address>
                    </div>
                </div>
                <div className="footerRight">
                    <ul className="sns">
                      <li>
                          <span className='hidden'>깃북</span>
                      </li>
                      <li>
                          <span className='hidden'>트위터</span>
                      </li>
                      <li>
                          <span className='hidden'>오픈씨</span>
                      </li>
                      <li>
                          <span className='hidden'>디스코드</span>
                      </li>
                      <li>
                          <span className='hidden'>텔레그램</span>
                      </li>
                    </ul>
                    <ul className="introduce">
                        <li>
                        <a  
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer">
                            Whitepaper
                        </a>
                        </li>
                        <li>
                        <a  
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer">
                            Privacy policy
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }