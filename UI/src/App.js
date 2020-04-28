import React from 'react';
import './App.css';
import Resume from "./Components/Resume/resume";
import { ButtonProvider } from "./Components/Resume/ButtonContext";
import { ButtonController } from "./Components/ButtonController/buttonController";
import { ResumeProvider } from "./Components/Resume/ResumeContext";
import { UserProvider } from "./Components/Resume/UserContext";
import SignUp from './Components/User/signup';
import axios from "axios";
axios.defaults.baseURL = 'https://us-central1-free-resume-builder.cloudfunctions.net/api'

function App() {
  return (
    <UserProvider>
    <ResumeProvider>
    <ButtonProvider>
    <div className="App">
      <header className="App-header">
        <h2>Free Resume Builder</h2>
        <h3>No Sign-up Required</h3>
        <SignUp/>
        <ButtonController/>

      </header>
      <main>
        <article>
          <Resume/>
        </article>
      </main>
    </div>
    </ButtonProvider>
    </ResumeProvider>
    </UserProvider>
  );
}

export default App;
