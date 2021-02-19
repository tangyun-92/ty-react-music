import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

// 使chrome中的react-devtools调试工具显示调试代码
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
