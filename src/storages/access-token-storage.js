import storageConfig from '../config/storage'

const { APP_STORAGE_KEY } = storageConfig

export class AccessTokenStorage {
  static #STORAGE_KEY = 'access_token'

  static set(accessToken) {
    localStorage.setItem(
      `${APP_STORAGE_KEY}:${this.#STORAGE_KEY}`,
      JSON.stringify(accessToken),
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
