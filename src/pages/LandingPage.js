import Header from "../components/header";
import Main from "../components/main";
import Howto from "../components/howTo";
import RoadMap from "../components/roadmap";
import Sustain from "../components/sustain";
import Team from "../components/team";

export default function LandingPage() {
    return (
      <div className="wrap">
            <Header />
            <Main />
            <Howto />
            <RoadMap />
            <Sustain />
            <Team />
      </div>
    );
  }
