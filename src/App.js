import React from 'react'
import { createStore } from 'redux'
import rootReducer from './store/rootReducer'
import { createBrowserHistory } from 'history';
import { Router,  Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import './styles/index.scss'

const store = createStore(rootReducer)

function App() {
  const history = createBrowserHistory();

  return (
    <>
	<Provider store={store}>
    	<Router history={history}>
				<Switch>
            				<Route
								exact
								path={`/`}
								component={Home}
							/>
				</Switch>
		</Router>
	</Provider>
    </>
  );
}

export default App;
