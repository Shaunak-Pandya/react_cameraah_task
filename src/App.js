import 'antd/dist/antd.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <Router><>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/password-forgot" component={ForgotPassword} />
        <Route exact path="/password-reset/:id" component={ResetPassword} />
      </Switch>
      </></Router>
    </div>
  );
}

export default App;

