import storageConfig from '../config/storage'

const { APP_STORAGE_KEY } = storageConfig

export class UserStorage {
  static #STORAGE_KEY = 'user'

  static set(user) {
    localStorage.setItem(
      `${APP_STORAGE_KEY}:${this.#STORAGE_KEY}`,
      JSON.stringify(user),
    )
  }

  static get() {
    const data = localStorage.getItem(`${APP_STORAGE_KEY}:${this.#STORAGE_KEY}`)
    return JSON.parse(data)
  }

  static delete() {
    localStorage.removeItem(`${APP_STORAGE_KEY}:${this.#STORAGE_KEY}`)
  }
}
