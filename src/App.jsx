import React from 'react';
import Data from './components/Data';
import Error from './components/Error';
import Loading from './components/Loading';
import './App.css'

function App() {
  

  return (
    <>
     <div className="main">
      <Data />
      <Error />
      <Loading />
    </div>
        
    </>
  )
}

export default App
