import '@iconscout/unicons/css/line.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import Memories from "./pages/memories";
import Children from "./pages/children";
import CreateAccount from "./pages/create-account";
import ForgotPassword from "./pages/forgot-password";
import MemoryDetail from "./components/Memory-detail";
import { AuthProvider } from './components/authContext';
import PrivateRoute from './components/PrivateRoute';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/memories/*" element={<PrivateRoute><Memories /></PrivateRoute>} />
        <Route path="/children/*" element={<PrivateRoute><Children /></PrivateRoute>} />
        <Route path="/memory-detail/:id" element={<MemoryDetail />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
};

export default App;