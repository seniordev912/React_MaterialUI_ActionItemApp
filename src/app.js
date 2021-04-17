import React from 'react'
import Routes from './routes'
import GlobalStyles from 'components/GlobalStyles'

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <GlobalStyles />
        <Routes />
      </React.StrictMode>
    </div>
  )
}

export default App
