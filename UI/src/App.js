import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from "./Components/Resume/resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Free Resume Builder</h2>
        <h3>No Sign-up Required</h3>
      </header>
      <main>
        <article>
          <Resume/>
        </article>
      </main>
    </div>
  );
}

export default App;
