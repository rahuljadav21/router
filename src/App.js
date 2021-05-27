
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ItemDetail from './components/Item';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Shop' exact component={Shop}/>
        <Route path='/Shop/:id' component={ItemDetail}/>
      
      </Switch>

    </div>
    </Router>
  );
}

export default App;
