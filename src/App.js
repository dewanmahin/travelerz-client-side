import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>  
          <Route exact path='/'>
            <Header></Header>
              <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/home'>
            <Header></Header>
              <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/contact'>
            <Header></Header>
              <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
            <Header></Header>
              <Login></Login>
            <Footer></Footer>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
