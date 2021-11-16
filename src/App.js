import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer'
import { createBrowserHistory } from 'history';
import { Router,  Route, Switch } from 'react-router-dom'
import DisplayPost from './components/Display/DisplayPosts'
import { Provider } from 'react-redux'
// import MasonryFunc from './components/Home/MasonryFunc'
import MasonryGallery from './components/Home'
import './styles/index.scss'

const store = createStore(rootReducer, applyMiddleware(thunk))

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
								component={MasonryGallery}
							/>
							<Route
								exact
								path={`/gallery/:id?`}
								component={DisplayPost}
							/>
				</Switch>
		</Router>
	</Provider>
    </>
  );
}

export default App;
