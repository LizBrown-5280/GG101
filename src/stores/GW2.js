import { defineStore } from 'pinia'

export const useGW2Store = defineStore('GW2Store', {
  state: () => ({
    /** __________ Key & Permission _________**/
    apiKey: '',
    apiKeyErrorMsg: '',
    permissions: '',

    tabNav: {
      account: {},
      builds: {},
      characters: {},
      guilds: {},
      inventories: {},
      tradingpost: {},
      progression: {},
      pvp: {},
      unlocks: {},
      wallet: {}
    },

    gw2: {
      authData: {

      },
    }
  }),

  getters: {
    getTabNav: state => state.tabNav,
    getApiKey: state => {
      return state.apiKey
    },
    getKeyErrorMgs: state => state.apiKeyErrorMsg,
    getPermissions: state => state.permissions,
  },

  actions: {
    updateUserApiKey(userKey) { 
      this.apiKey = userKey
    },
  }
})
