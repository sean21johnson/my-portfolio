import TopBar from './components/TopBar';
import ProfileCard from './components/ProfileCard';
import ProfileAccordion from './components/ProfileAccordion';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Footer from './components/Footer';
import * as Layout from './components/Layout';

const App = () => {
  return (
    <>
      <div id="topbar">
        <TopBar />
      </div>
      {/* <Layout.ContentWrapper> */}
      <div id="about">
        <Layout.ProfileLayout>
          <ProfileCard />
          <Layout.ProfileLayoutRight>
            <ProfileAccordion />
            <Timeline />
          </Layout.ProfileLayoutRight>
        </Layout.ProfileLayout>
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <TechnicalSkills />
      </div>
      {/* </Layout.ContentWrapper> */}
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default App;
