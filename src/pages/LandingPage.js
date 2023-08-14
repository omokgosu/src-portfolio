import React, {useState} from 'react';

import Header from "../components/header";
import Main from "../components/main";
import Typo from "../components/typo";
import Howto from "../components/howTo";
import RoadMap from "../components/roadmap";
import Sustain from "../components/sustain";
import Slide from "../components/Slide";
import Team from "../components/team";
import Last from "../components/Last";
import Footer from "../components/footer";
import Alert from "../components/Alert";

export default function LandingPage() {

    const [alert , setAlert] = useState(false);

    const alertArea = () => {
      setAlert(!alert);
    }

    return (
      <div className="wrap">
            <Header alertArea={alertArea}/>
            <Main alertArea={alertArea}/>
            <article>
              <h2 className="hidden">본문 콘텐츠 영역</h2>
              <Typo alertArea={alertArea}/>
              <Howto />
              <Sustain />
              <RoadMap />
              <Slide />
              <Team />
              <Last alertArea={alertArea}/>
            </article>
            <Footer alertArea={alertArea}/>
            {alert && <Alert alertArea={alertArea}/>}
      </div>
    );
  }
