import TopBar from './components/TopBar';
import ProfileCard from './components/ProfileCard';
import ProfileAccordion from './components/ProfileAccordion';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Projects from './components/Projects';
import * as Layout from './components/Layout';

const App = () => {
  return (
    <>
      <TopBar />
      <Layout.ProfileLayout>
        <ProfileCard />
        <Layout.ProfileLayoutRight>
          <ProfileAccordion />
          <Timeline />
        </Layout.ProfileLayoutRight>
      </Layout.ProfileLayout>
      <Experience />
      <Projects />
    </>
  );
};

export default App;
