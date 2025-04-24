import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
    <div className='container-app'>
      <div className='container-header-app'>
        <header className='header-app'>
          <Header />
        </header>
      </div>


      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
