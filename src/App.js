import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Contact from './pages/Contact/Contact';
import BookingDetails from './pages/Home/BookingDetails/BookingDetails';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path='/myBookings'>
              <Header></Header>
                <MyBookings></MyBookings>
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
            <Route path='/bookingdtl/:_id'>
              <Header></Header>
                <BookingDetails></BookingDetails>
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
