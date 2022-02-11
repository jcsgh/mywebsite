import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
