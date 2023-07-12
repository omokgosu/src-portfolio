import '../styles/main.css'

export default function Main() {
    return (
      <main className="main">
        <div className="mainInner">
            <h3>Safe Road Club &#40; SRC &#41;</h3>
            <p>Turn your daily driving into passive income.</p>
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
      </main>
    );
  }
