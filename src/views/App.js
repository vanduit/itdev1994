import logo from './logo.svg';
import './App.scss';
import MyCombonent from './Example/MyCombonent.js';
import ChildMyCombonent from './Example/ChildMyCombonent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import MyApp from './Demo1/MyApp';
import TEST from './MyAppNew/Test';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ListUser from './Users/ListUser';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyCombonent />
            </Route>
            <Route path="/myapp">
              <MyApp />
            </Route>
            <Route path="/testapp">
              <TEST />
            </Route >
            <Route path="/user">
              <ListUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
