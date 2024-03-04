import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light',
  }),
  getters: {
    isDarkTheme: (state) => state.theme === 'dark',
  },
  actions: {
    defineTheme(theme) {
      this.theme = theme
      localStorage.setItem('theme', theme)

      document.documentElement.classList.remove('dark', 'light')

      if (this.isDarkTheme) {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('light')
      }
    },
    toggleTheme() {
      this.defineTheme(this.isDarkTheme ? 'light' : 'dark')
    },

    fetch() {
      this.defineTheme(localStorage.getItem('theme') || 'light')
    }
  },
})