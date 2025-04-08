import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LoginPage from './pages/LoginPage';
import ConfirmationPage from './pages/ConfirmationPage';

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
          <Route path="/bookingConfirmation" element={<ConfirmationPage confirmation= "Booking" />} />
          <Route path="/orderConfirmation" element={<ConfirmationPage confirmation= "Order" />} />
          <Route path="/accountConfirmation" element={<ConfirmationPage confirmation= "Account creation" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;