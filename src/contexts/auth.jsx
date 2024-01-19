import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { AccessTokenStorage } from '../storages/access-token-storage'
import { UserStorage } from '../storages/user-storage'

/**
 * @typedef User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string|undefined} avatar
 * @property {Date} created_at
 * @property {Date} updated_at
 *
 * @typedef ReactContextProps
 * @property {User} user
 * @property {(data: { email: string, password: string }) => Promise<void>} signIn
 * @property {() => void} signOut
 * @property {(data: { user: User, avatarFile: string }) => Promise<void>} updateProfile
 */

/** @type {React.Context<ReactContextProps>} */
export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  /**
   * @param {object} params
   * @param {string} params.email
   * @param {string} params.password
   */
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { access_token, user } = response.data

      api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`

      setData({ user })

      AccessTokenStorage.set(access_token)
      UserStorage.set(user)
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao tentar fazer login.')
      }
    }
  }

  function signOut() {
    AccessTokenStorage.delete()
    UserStorage.delete()

    setData({})
  }

  /**
   * @param {Object} params
   * @param {User} params.user
   * @param {File} params.avatarFile
   */
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)

      const updatedUser = {
        ...user,
        password: undefined,
        password_old: undefined,
      }

      UserStorage.set(updatedUser)
      setData({ user: updatedUser })

      alert('Perfil atualizado!')
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const access_token = AccessTokenStorage.get()
    const user = UserStorage.get()

    if (access_token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`

      setData({ user })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}
