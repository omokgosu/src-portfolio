import '../styles/header.css'

export default function Header() {
    return (
      <header className="header">
        <div className="headerInner">
            <h1><span className="hidden">SRC 로고</span></h1>
            <nav>
                <h2 className="hidden">네비게이션 영역</h2>
                <ul>
                    <li><a href="#howto">HOW TO</a></li>
                    <li><a href="#RoadMap">LOAD MAP</a></li>
                    <li><a href="#Sustain">SUSTAIN</a></li>
                    <li><a href="#Team">TEAM</a></li>
                </ul>
            </nav>
            <ul className="sns">
                <li>
                    <span className='hidden'>인스타그램</span>
                </li>
                <li>
                    <span className='hidden'>페이스북</span>
                </li>
                <li>
                    <span className='hidden'>유튜브</span>
                </li>
            </ul>
        </div>
      </header>
    );
  }
