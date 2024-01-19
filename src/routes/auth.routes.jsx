import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { UserStorage } from '../storages/user-storage'

export function AuthRoutes() {
  const user = UserStorage.get()

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}
