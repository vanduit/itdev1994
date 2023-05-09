import logo from './logo.svg';
import './App.scss';
import MyCombonent from './Example/MyCombonent.js';
import ChildMyCombonent from './Example/ChildMyCombonent';
import ListTodo from './Todos/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IT-DEV
        </p>
        {/* <MyCombonent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
