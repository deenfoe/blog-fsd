import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectIsAuthenticated } from '../features/auth/model/authFormSlice'

function PrivateRoute({ element }) {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? element : <Navigate to="/sign-in" />
}

export default PrivateRoute
