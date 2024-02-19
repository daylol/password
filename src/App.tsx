import React, { useState } from 'react';
import EmptySection from './components/EmptySection';
import Section from './components/Section';
import './components/style.css';

function App() {
  const [password, setPassword] = useState<string>('');
  const num = /[0-9]/;
  const letters = /[A-Za-zА-Яа-я]/;
  const symbols = /[!@#$%^&*()_+="№;%:]/;

  const easy = num.test(password) || letters.test(password) || symbols.test(password);

  const medium =
    (num.test(password) && letters.test(password)) ||
    (symbols.test(password) && letters.test(password)) ||
    (num.test(password) && symbols.test(password));

  const strong = num.test(password) && symbols.test(password) && letters.test(password);

  return (
    <div className="App">
      <div className="mainBox">
        <div>
          <h1>Check the security level of your password</h1>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
          />
        </div>
        <div className="info">
          <div className="circle">
            <div className="bg-red"></div>
            <p>weak</p>
          </div>
          <div className="circle">
            <div className="bg-yellow"></div>
            <p>medium</p>
          </div>
          <div className="circle">
            <div className="bg-green"></div>
            <p>strong</p>
          </div>
        </div>
      </div>

      {/*       {
        strong && password.length >= 8 ? <p>strong</p> : medium && password.length >= 8 ? <p>medium</p> : easy && password.length >= 8 ? <p>easy</p> : <p>a password must have at least 8 digits</p>
      } */}
      <h2 className="answer">Level of security:</h2>
      {password ? (
        <Section strong={strong} medium={medium} easy={easy} pas={password} />
      ) : (
        <EmptySection password={password} />
      )}
    </div>
  );
}

export default App;
