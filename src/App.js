import React from 'react';
import MovieProvider from './context/movies';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { Details } from './pages/Details';
import { LogInPage } from './pages/LogIn';
import { RegisterPage } from './pages/Register';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>

          <Route exact path="/movie/:id">
            <Layout>
              <Details />
            </Layout>
          </Route>

          <Route exact path="/login">
            <Layout>
              <LogInPage />
            </Layout>
          </Route>

          <Route exact path="/register">
            <Layout>
              <RegisterPage />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
