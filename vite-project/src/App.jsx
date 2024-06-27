import React from 'react';
import './App.css';
import UserList from './product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App with Axios Example</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;

