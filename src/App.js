import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/İntroduction';
import Partnyorlar from './components/Partnyorlar';
import AwardsContainer from './components/AwardsContainer';

function App() {
  return (
    <>
    <Navbar />
    <Introduction />
    <Partnyorlar />
    <AwardsContainer  />
 
    </>

  );
  
}

export default App;
