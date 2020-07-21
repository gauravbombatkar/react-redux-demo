import React from 'react';
import BookContainer from './Component/BookContainer';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import HookBookContainer from './Component/HookBookContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer />
      <HookBookContainer />
    </div>
    </Provider>
  );
}

export default App;
