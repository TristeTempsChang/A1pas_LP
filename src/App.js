import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import LoaderProgressBar from './components/LoaderProgressBar';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!loading) {
      setFadeIn(true);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoaderProgressBar onFinish={() => setLoading(false)} />}

      {!loading && (
        <Router>
          <div
            className={`transition-opacity duration-700 ease-in ${
              fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Routes>
              <Route path="/register" element={<Register />} />
              
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Landing />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
