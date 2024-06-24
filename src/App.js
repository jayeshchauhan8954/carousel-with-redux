import React from 'react';
import { Provider } from 'react-redux';
import './styles.css';
import store from './redux/store';
import Image from './components/Image';
import Navigation from './components/Navigation';
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Image />
        <Navigation />
      </div>
    </Provider>
  );
};

export default App;
