import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar"; // Import Navbar
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/protected",
    element: <ProtectedRoute />,
    children: [
      {
        path: "routes",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "page1",
            element: <Dashboard />,
          },
          {
            path: "page2",
            element: <Profile />,
          },
          {
            path: "page3",
            element: <Settings />,
          },
        ],
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here so it shows on every page */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
