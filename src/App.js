import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ReservationsPage from './ReservationsPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import BookingConfirmationPage from './BookingConfirmationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/orderonline" element={<OrderOnlinePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/confirmation" element={<BookingConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;