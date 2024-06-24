
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Carousel from './components/Carousel';
import carouselReducer from './redux/reducers';

const store = createStore(carouselReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Image Carousel</h1>
        <Carousel />
      </div>
    </Provider>
  );
}

export default App;
