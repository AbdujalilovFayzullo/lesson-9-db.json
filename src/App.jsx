import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';
import Header from './components/Header';
import Detail from './components/SecondPage/Detail';

const App = () => {
  return (
    <div>
      <Header/>
      <News />
      <Detail />
    </div>
  );
};

export default App;
