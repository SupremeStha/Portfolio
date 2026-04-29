import Navbar from './component/nav-links/Navbar';
import HeroTitle from './component/hero/HeroTitle';
import Background from './component/Background';
import AboutMe from './component/about-me/AboutMe';
import Education from './component/Education/Education';
import Projects from './component/Projects/Projects';
import Contact from './component/contactme/ContactMe';
import Footer from './component/footer/Footer';
import ClickSpark from './component/ClickSpark';

const App = () => (
  <>
    <Background />
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    />
    <div className="app-root">
      <Navbar />
      <main>
        <HeroTitle />
        <AboutMe />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
