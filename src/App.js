import React, {useState} from 'react';
import './App.css';
import ColocarTexto from './ColocarTexto';

function App() {
  
  const [value, setValue] = useState(['https://media4.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47m1gsjzex1wx1lrubi9ueuzpmqkg9lphng2h1bvto&ep=v1_gifs_search&rid=giphy.gif&ct=g']);
  
  return (
    
    <div className="App">
      <section className="App-content">
        <img src = {value} />
        <hr width ="90%" />
        <p>
          <ColocarTexto/>
        </p>
      </section>
    </div>
  );
}

export default App;
