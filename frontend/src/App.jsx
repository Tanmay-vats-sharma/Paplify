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

import AppShell from './components/navigation/AppShell'

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
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Application routes */}
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Dashboard />} />

          <Route
            path="documents"
            element={<Documents />}
          />

          <Route
            path="templates"
            element={<Templates />}
          />

          <Route
            path="create"
            element={<CreateDocument />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App