import React from 'react'
import Home from 'pages/Home';
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
    
