import React from 'react';
import './App.css';
import Resume from "./Components/Resume/resume";
import { ButtonProvider } from "./Components/Resume/ButtonContext";
import { ButtonController } from "./Components/ButtonController/buttonController";

function App() {
  

  return (
    <ButtonProvider>
    <div className="App">
      <header className="App-header">
        <h2>Free Resume Builder</h2>
        <h3>No Sign-up Required</h3>
        <ButtonController/>
      </header>
      <main>
        <article>
          <Resume/>
        </article>
      </main>
    </div>
    </ButtonProvider>
  );
}

export default App;
