import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import AddPackage from './pages/AddPackage/AddPackage';
import AllBookings from './pages/AllBookings/AllBookings';
import Contact from './pages/Contact/Contact';
import BookingDetails from './pages/Home/BookingDetails/BookingDetails';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
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
            <Route path='/allBookings'>
              <Header></Header>
                <AllBookings></AllBookings>
              <Footer></Footer>
            </Route>
            <Route path='/addPackage'>
              <Header></Header>
                <AddPackage></AddPackage>
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
            <PrivateRoute path='/bookingdtl/:_id'>
              <Header></Header>
                <BookingDetails></BookingDetails>
              <Footer></Footer>
            </PrivateRoute>
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
