import React, { Suspense } from 'react';
import './App.css';
import { Link, Route } from "wouter"
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Logo from './Logo.png'
import StaticContext from './context/StaticContext'
import { GifsContextProvider }  from './context/GifsContext'
import Error404 from './monophy.gif'

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={{name:'kevin',
    agregameAFace: true}}>
    <div className="App">
    <Suspense fallback={null}>
      <section className="App-content">
        <Link to="/"> 
          <img className="App-logo" alt='Giffy logo' src={Logo} />
        </Link>
        <GifsContextProvider>
          <Route 
            component={HomePage} 
            path="/" 
          />
          <Route 
            component={SearchResults} 
            path="/search/:keyword/:rating?" 
          />
          
          <Route 
            component={Detail} 
            path="/gif/:id" 
          />

          <Route 
            component={() => <img src={Error404} alt='error404'/> } 
            path="/404" 
          />
        </GifsContextProvider>
      </section>
      </Suspense>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
