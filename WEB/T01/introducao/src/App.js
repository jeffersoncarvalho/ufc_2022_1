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
import IMCFuncao from './components/imc/IMCFuncao';
import Filho from './components/paifilho/Filho';
import Pai from './components/paifilho/Pai';
import CidadeSimples from './components/cidades/CidadeSimples';
import ContadorComHook from './components/contador/ContadorComHook';

const imgPath = 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png'

function App() {
  return (
    <div className="App">
      <ContadorComHook />
      <img src={imgPath} alt='Aragas'/>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <IMCFuncao peso={90} altura={1.83}/>
    </div>
  );
}*/

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
