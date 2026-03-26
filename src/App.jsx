import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ActivitiesPage from './pages/ActivitiesPage';
import PlacesPage from './pages/PlacesPage';
import ContactPage from './pages/ContactPage';
import FloatingContact from './components/FloatingContact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:id" element={<RoomDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <FloatingContact />
    </>
  );
};

export default App;
