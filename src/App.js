import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>my app</h1>
      <form>
        <label className="d-block" >
          name:
        </label>
        <input type="text" className="d-block" />
        <label className="d-block" >
          last name:
        </label>
        <input type="text" className="d-block" />
        <label className="d-block" >
         email:
        </label>
        <input type="email" className="d-block" />
    
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  );
}

export default App;
