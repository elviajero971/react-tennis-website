import './App.css';
import NavBar from './components/navbar/NavBar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import React, {useState} from 'react';

function App() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeIndexCallback = (newIndex) => {setSelectedIndex(newIndex)};
  return (
    <div className="App">
      <NavBar callback={changeIndexCallback}/>
      <Content index = {selectedIndex}/>
      <Footer/>
    </div>
  );
}

export default App;
