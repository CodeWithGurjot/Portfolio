import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import AboutCard from './components/AboutCard';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box minH='100vh' w='100%'>
      <Navbar />
      <Landing />
      <AboutCard />
      <Projects />
      <Skills />
    </Box>
  );
};

export default App;
