import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarA from './components/NavbarA';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RoomDetails from './pages/RoomDetails';
import AdminDashboard from './pages/admin/Dashboard';
import AdminBookings from './pages/admin/Bookings';
import AdminBookingDetails from './pages/admin/BookingDetails';
import AdminPayments from './pages/admin/Payments';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<> <Navbar /><Home /></>} />
            <Route path="/about" element={<> <Navbar /><About /></>} />
            <Route path="/contact" element={<> <Navbar /><Contact /></>} />
            <Route path="/rooms/:id" element={<> <Navbar /><RoomDetails /></>} />
            
            <Route path="/admin" element={<> <NavbarA /><AdminDashboard /></>} />
            <Route path="/admin/bookings" element={<> <NavbarA /><AdminBookings /></>} />
            <Route path="/admin/bookings/:id" element={<> <NavbarA /><AdminBookingDetails /></>} />
            <Route path="/admin/payments" element={<> <NavbarA /><AdminPayments /></>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;