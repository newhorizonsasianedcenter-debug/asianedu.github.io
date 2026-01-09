import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Programs from './pages/Programs.tsx';
import Donate from './pages/Donate.tsx';
import Impact from './pages/Impact.tsx';
import Resources from './pages/Resources.tsx';
import Volunteer from './pages/Volunteer.tsx';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHash = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/about': return <About />;
      case '#/programs': return <Programs />;
      case '#/donate': return <Donate />;
      case '#/impact': return <Impact />;
      case '#/resources': return <Resources />;
      case '#/volunteer': return <Volunteer />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
