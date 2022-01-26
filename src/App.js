
import './App.css';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Login from './Pages/Login';


function App() {
  return (
    // Router imported from react-router-dom
      
      <Router>
        <Sidebar />
          <Switch>
            <Route exact path= "/"><Home /></Route>
            <Route path= "/settings" ><Settings /></Route>
            <Route path= "/login"><Login /></Route>
          </Switch>
      </Router>

  );
}


export default App;
