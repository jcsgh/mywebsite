import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
