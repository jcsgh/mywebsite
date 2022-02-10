import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
