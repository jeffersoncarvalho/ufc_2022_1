import './App.css';

import HelloWorld from './components/HelloWorld';
import MeusDados from './components/MeusDados';
import MeusDadosProps from './components/MeusDadosProps';

function App() {
  return (
    <div className="App">
      <MeusDadosProps nome="Jefferson" curso="Design Digital"/>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <MeusDados />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <h2>Jefferson de Carvalho Silva</h2>
      <HelloWorld />
    </div>
  );
}*/

export default App;
