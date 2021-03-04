import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';

import DashboarPage from './pages/dashboardPage';
import LoginPage from './pages/loginPage';
import NotFound from './pages/notFound';
import RegisterPage from './pages/resgisterPage';

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/not-found" component={NotFound} />
      <Route exact path="/dashboard" component={DashboarPage} />
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
