import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
