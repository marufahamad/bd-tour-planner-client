import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import BookNow from './components/BookNow/BookNow';
import MyTours from './components/MyTours/MyTours';
import AllTours from './components/AllTours/AllTours';
import AddLocation from './components/AddLocation/AddLocation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/location/:locationId">
              <BookNow></BookNow>
            </PrivateRoute>
            <Route path="/myTours">
              <MyTours></MyTours>
            </Route>
            <Route path="/allTours">
              <AllTours></AllTours>
            </Route>
            <Route path="/addLocation">
              <AddLocation></AddLocation>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
