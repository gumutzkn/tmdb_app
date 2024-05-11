import { useEffect } from 'react';
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from 'react-router-dom';

// Loaders
import { movieDetailsLoader, popularMoviesLoader } from './utils';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Popup from './components/Popup';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

// Context
import { usePopup } from './context/PopupContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavFooter />}>
      <Route
        index
        element={<HomePage />}
        loader={popularMoviesLoader}
      />
      <Route path='about' element={<AboutPage />} />
      <Route
        path='movie/:movieId'
        element={<MovieDetailsPage />}
        loader={movieDetailsLoader}
      />
    </Route>
  )
);

function NavFooter() {
  const { isPopupVisible, hidePopup } = usePopup();
  const location = useLocation();

  useEffect(() => {
    hidePopup();
  }, [location]);

  return (
    <>
      {isPopupVisible && <Popup />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
