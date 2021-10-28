import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Admin from './Pages/Home/Admin/Admin';
import Home from './Pages/Home/Home/Home';
import MyEvents from './Pages/Home/MyEvents/MyEvents';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import RegisterVolnteer from './Pages/Home/RegisterVolunteer/RegisterVolnteer';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register/Register';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/myEvents/:uid'>
              <MyEvents></MyEvents>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <PrivateRoute path='/services/:serviceId'>
              <RegisterVolnteer></RegisterVolnteer>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
