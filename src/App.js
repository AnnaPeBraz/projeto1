import './App.css';
import HelloWord from './components/Hello';
import Pessoa from './components/Pessoa';
import List from './components/Lista';
import Evento from './components/Evento';

function App() {


  return (
    
    <div className="App">
      <HelloWord/>
      <p> Vamo que vamo</p>
      <Evento/>
      <Pessoa nome="Anna" idade="30 anos" prof="Desempregada :')" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  )

}

export default App;
