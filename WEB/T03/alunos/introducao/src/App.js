import { Component } from 'react';
import './App.css';
import Informacoes from './components/Informacoes';

import MeusDados from './components/MeusDados';
import MeusDadosProps from './components/MeusDadosProps';

function App() {
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
}


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
