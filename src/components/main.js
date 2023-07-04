import '../styles/main.css'

export default function Main() {
    return (
      <main className="main">
        <div className="mainInner">
            <h2>Safe Road Club &#40; SRC &#41;</h2>
            <p>Turn your daily driving into passive income.</p>
            <ul>
                <li>
                    <a 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src='/assets/icons/main/play_store.svg'/>
                        <span>PLAY STORE</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >   
                        <img src='/assets/icons/main/app_store.svg'/>
                        <span>APP STORE</span>
                    </a>
                </li>
            </ul>
        </div>
      </main>
    );
  }
