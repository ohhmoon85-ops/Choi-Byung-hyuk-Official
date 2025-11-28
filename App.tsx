import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Insights } from './pages/Insights';
import { Media } from './pages/Media';
import { Contact } from './pages/Contact';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);

  // Simple hash-based routing handler
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'profile') setCurrentPage(PageType.PROFILE);
      else if (hash === 'insights') setCurrentPage(PageType.INSIGHTS);
      else if (hash === 'media') setCurrentPage(PageType.MEDIA);
      else if (hash === 'contact') setCurrentPage(PageType.CONTACT);
      else setCurrentPage(PageType.HOME);
      
      window.scrollTo(0, 0);
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case PageType.HOME:
        return <Home />;
      case PageType.PROFILE:
        return <Profile />;
      case PageType.INSIGHTS:
        return <Insights />;
      case PageType.MEDIA:
        return <Media />;
      case PageType.CONTACT:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage}>
      {renderPage()}
    </Layout>
  );
}