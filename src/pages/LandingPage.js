import Header from "../components/header";
import Main from "../components/main";
import Typo from "../components/typo";
import Howto from "../components/howTo";
import RoadMap from "../components/roadmap";
import Sustain from "../components/sustain";
import Team from "../components/team";
import Last from "../components/Last";
import Footer from "../components/footer";

export default function LandingPage() {
    return (
      <div className="wrap">
            <Header />
            <Main />
            <Typo />
            <Howto />
            <Sustain />
            <RoadMap />
            <Team />
            <Last />
            <Footer />
      </div>
    );
  }
