import React from 'react';
import Header from './Component/Header'
import TinderCards from './Component/TinderCards'
import SwipeButtons from './Component/SwipeButtons'
import Chats from './Component/Chats'
import ChatScreen from './Component/ChatScreen'
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* rouiting is here  */}
      <Switch>
        <Route  exact path="/chat/:person" >
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
        <Route exact path="/chat" >
          <Header backButton="/" />
          <Chats/>
        </Route>
        <Route exact path="/">
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
