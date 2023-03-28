import './App.css';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './views/LoginPage'
import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage';
import io from 'socket.io-client';
import MessagesPage from './views/MessagesPage'
import CreatePropertyPage from './views/CreatePropertyPage';
import ViewOneProperty from './views/ViewOneProperty';
// import CookieTest from './views/CookieTest';
import AllProperties from './views/AllProperties';
import MyProfile from './views/MyProfile';







function App() {

  
  return (
    <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/add_property" element={<CreatePropertyPage />} />
          <Route path="/view/:id" element={<ViewOneProperty />} />
          <Route path="/properties" element={<AllProperties />} />
          <Route path="/my_profile" element={<MyProfile />} />
        </Routes>
    </div>
  );
}

export default App;
