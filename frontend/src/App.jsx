import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Landing from './pages/Landing'

import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'

import Dashboard from './pages/app/Dashboard'
import Documents from './pages/app/Documents'
import Templates from './pages/app/Templates'
import CreateDocument from './pages/app/CreateDocument'
import Settings from './pages/app/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Application routes */}

        <Route
          path="/app"
          element={<Dashboard />}
        />

        <Route
          path="/app/documents"
          element={<Documents />}
        />

        <Route
          path="/app/templates"
          element={<Templates />}
        />

        <Route
          path="/app/create"
          element={<CreateDocument />}
        />

        <Route
          path="/app/settings"
          element={<Settings />}
        />

        {/* Unknown route */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App