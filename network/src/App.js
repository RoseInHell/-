import React, { memo } from 'react';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';

import store from './store'
import routes from './router'

import { HashRouter } from 'react-router-dom';
import Header from './components/header'

export default memo(function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <Header/>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
})
