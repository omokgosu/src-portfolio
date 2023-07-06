import '../styles/last.css'

export default function Last() {

    return (
        <section className="Last">
            <div className="LastInner">
                <h3 className="hidden">Last</h3>
                <div className="lastText">
                    <h4>Turn your daily driving into passive income.</h4>
                    <ul>
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src='/assets/icons/main/play_store.svg' alt="플레이스토어 이미지"/>
                                <span>PLAY STORE</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://testflight.apple.com/join/a2eEql39"
                                target="_blank"
                                rel="noopener noreferrer"
                            >   
                                <img src='/assets/icons/main/app_store.svg' alt="앱스토어 이미지"/>
                                <span>APP STORE</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <img src="/assets/images/last/last_app.png" alt="기울어진 앱 이미지"/>
            </div>
        </section>
    );
  }