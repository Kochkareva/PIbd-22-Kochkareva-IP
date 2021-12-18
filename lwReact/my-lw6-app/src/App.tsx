import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SomeValues from './SomeValues';
import Comment from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <SomeValues firstValue={10} secondValue={255}/>

        <Comment text={'Надеюсь, лабораторная сделана без ошибок'} name={ 'Доброго времени суток!'}  avatarUrl= { 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/28/280ba399538a6ad13c7840eacc8d185091030d90_medium.jpg'} />

        <Counter />
      </header>
    </div>
  );
}

export default App;
