import './App.css';

import HelloWorld from './components/HelloWorld';
import MeusDados from './components/MeusDados';
import MeusDadosProps from './components/MeusDadosProps';

import QuestaoO1 from './components/atividade01/Questao01';
import QuestaoO2 from './components/atividade01/Questao02';
import Questao03 from './components/atividade01/Questao03';
import Questao04 from './components/atividade01/Questao04';
import Casa from './components/got/Casa';
import Personagem from './components/got/Personagem';
import IMC from './components/imc/IMC';

function App() {
  return (
    <div className="App">
      <IMC peso={90} altura={1.83}/>
    </div>
  );
}

/*const App = () =>
  <div className="App">
    <Casa casa="Targeryan" localizacao="Winterfell">
      <Personagem nome="Arya"/>
      <Personagem nome="Robert"/>
      <Personagem nome="Sansa"/>
      <Personagem nome="John"/>
      <Personagem nome="Ned"/>
    </Casa>
  </div>
*/

/*function App() {
  return (
    <div className="App">
      <Questao04 />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <Questao03 />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <QuestaoO2 />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <QuestaoO1 />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <MeusDadosProps nome="Jefferson" curso="Design Digital"/>
    </div>
  );
}*/

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
