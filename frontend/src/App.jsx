import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PublicRoute from './features/routes/PublicRoute'
import ProtectedRoutes from './features/routes/ProtectedRoute'
import RootLayout from './Dashboard/layout/RootLayout'
import Dashboard from './Dashboard/pages/Dashboard'
import List from './Dashboard/pages/List'
import Coins from './Dashboard/pages/Coins'
import CryptoSingle from './Dashboard/pages/CryptoSingle'

const App = () => {
  const router = createBrowserRouter([
    { index: true, element: <Home /> },
    {
      element: <PublicRoute />,
      children: [
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> }
      ]
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/dashboard/*', element: <RootLayout />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: 'list', element: <List /> },
            { path: 'coins', element: <Coins /> },
            { path: 'coins/:id', element: <CryptoSingle /> },
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App