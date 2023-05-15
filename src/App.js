import styled from 'styled-components';

import LandingPage from './Pages/LandingPage';
import Shop from './Pages/Shop';
import Painting from './Pages/Painting';
import Comics from './Pages/Comics';
import Contact from './Pages/Contact';
import Illustration from './Pages/Illustration';
import ComicsLib from './Pages/ComicsLib';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Wrapper>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Paintings" element={<Painting />} />
        <Route path="/Illustrations" element={<Illustration />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/ComicsLib" element={<ComicsLib />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </Wrapper> 
  );
}

export default App;

const Wrapper = styled.div`
overflow-x: hidden;
`;