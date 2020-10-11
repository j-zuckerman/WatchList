import React from 'react';
import MovieProvider from './context/movies';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';

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
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
