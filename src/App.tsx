import { Provider } from 'react-redux'

import { Home } from './Components/Home'
import { store } from './store'

import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className='container'>
        <Home />
      </div>
    </Provider>
  )
}

export default App
