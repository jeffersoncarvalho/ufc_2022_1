//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';

/*import Informacoes from './components/Informacoes';

import MeusDados from './components/MeusDados';
import MeusDadosProps from './components/MeusDadosProps';

import Questao01 from './components/atividade01/Questao01';
import Questao02 from './components/atividade01/Questao02';
import Questao03 from './components/atividade01/Questao03';
import Questao04 from './components/atividade01/Questao04';

import Casa from './components/hardcoded/Casa';
import Personagem from './components/hardcoded/Personagem';*/
import IMC from './components/imc/IMC';
import IMCClasse from './components/imc/IMCClasse';

function App() {
  return (
    <IMCClasse altura={4.15} peso={90} />
  )
}

/*function App() {
  return (
    <div className='App'>
      <Casa show="Game of Thrones" 
            casa="Casa Genérica" 
            horario="nobre">
        <Personagem nome="Arya"/>
        <Personagem nome="Tyrion"/>
        <Personagem nome="Robert"/>
        <Personagem nome="Danerys"/>
        <Personagem nome="G.R.R.M"/>
      </Casa>
    </div>

  )
}*/

/*function App() {
  return (
    <div className='App'>
      <Questao04 />
    </div>
    
  )
}*/

/*function App() {
  return (
    <div className='App'>
      <Questao03 />
    </div>
    
  )
}*/

/*function App() {
  return (
    <div className='App'>
      <Questao02 />
    </div>
    
  )
}*/

/*function App() {
  return (
    <div className='App'>
      <Questao01 />
    </div>
    
  )
}*/

/*function App() {
  return (
    <div className='App'>
      <Informacoes 
        nome='Fulano'
        curso='ES'
        turno='Madrugada'
        universidade='UFC'
        />
    </div>
    
  )
}*/


/*function App() {
  return (
    <div className='App'>
      <MeusDados />
      <MeusDadosProps 
        nome="Jefferson"
        curso='Design Digital'
        />
      <Informacoes 
        nome='Fulano'
        curso='ES'
        turno='Madrugada'
        universidade='UFC'
        />
    </div>
    
  )
}*/

//criando uma função clássica
/*function App() {
  return (
    <div className="App">
      <h1>Nome: Jefferson de Carvalho</h1>
      <h1>Curso: Sistemas de Informação</h1>
      <h1>Disciplina: Desenvolvimento de Software para WEB</h1>
    </div>
  );
}*/

//constante que recebe uma função arrow
/*const App = () => {
  return (
    <div className="App">
      <h3>Usando Funções Arrow</h3>
      <h1>Nome: Jefferson de Carvalho</h1>
      <h1>Curso: Sistemas de Informação</h1>
      <h1>Disciplina: Desenvolvimento de Software para WEB</h1>
    </div>
  )
}*/

/*const App = () => 
    <div className="App">
      <h3>Usando Funções Arrow simplificada</h3>
      <h1>Nome: Jefferson de Carvalho</h1>
      <h1>Curso: Sistemas de Informação</h1>
      <h1>Disciplina: Desenvolvimento de Software para WEB</h1>
    </div>
*/

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Usando Classes</h3>
        <h1>Nome: Jefferson de Carvalho</h1>
        <h1>Curso: Sistemas de Informação</h1>
        <h1>Disciplina: Desenvolvimento de Software para WEB</h1>
      </div>
    )
  }
}*/

export default App;
