
import './App.css';
import './styles/navbar.css'
import './styles/earnandrefer.css'
import './styles/howdoesitworkcard.css'
import './styles/friendrefer.css'
import './styles/referfriendcard.css'

import Earnandrefer from './screens/Earnandrefer';
import Navbar from './components/Navbar';
import Friendrefer from './screens/Friendrefer';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  exact path = {"/"} element={<Earnandrefer />}/>
          <Route  exact path = {"/friendrefer"} element={<Friendrefer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
