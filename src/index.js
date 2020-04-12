import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import './styles/styles.scss'
import NewsList from './components/NewsList'

const App = () => {
    return (
        <Provider store={store}>

            <NewsList />

        </Provider>
    )
}

render(<App />, document.getElementById('root'))
