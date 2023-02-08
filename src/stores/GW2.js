import { defineStore } from 'pinia'
import { useAxiosGet } from '@/composables/useAxiosGet'

export const useGW2Store = defineStore('GW2Store', {
  state: () => ({
    openData: {},
    acct: {
      key: '',
      endpointUrl: '/v2/tokeninfo?access_token=',
      connectionSucceeded: '',
      error: {},
      data: {}
    },
    demoData: {
      connectionSucceeded: true,
      key: 'E67157AA-C1F0-4343-849A-B2CE1B111808A4BE252F-7B46-41CA-8063-E94-DEMO-KEY',
      error: {},
      data: {
        permissions: [
          'account',
          'builds',
          'characters',
          'guilds',
          'inventories',
          'tradingpost',
          'progression',
          'pvp',  
          'unlocks',
          'wallet',
          ]
        }
    },
    tabNav: {
      account: {},
      // builds: {},
      characters: {},
      // guilds: {},
      inventories: {},
      // tradingpost: {},
      progression: {},
      // pvp: {},
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
    getApiKey: state => state.acct.key,
    getKeyErrorCode: state => state.acct.error.code,
    getAcctPermissions: state => state.acct.data.permissions,
    getDemoKey: state => state.demoData.key,
    getDemoPermissions: state => state.demoData.data.permissions,
  },

  actions: {
    storeApiKey(userKey) {
      this.acct.key = userKey
    },

    async requestPermissionsList() {
      this.clearAcctData()

      if (this.acct.key) {
        const payload = await useAxiosGet(this.acct.endpointUrl + this.acct.key)
        this.acct.connectionSucceeded = payload.connectionSucceeded
        this.acct.error = { ...payload.error }

        if (this.acct.connectionSucceeded) {
          this.acct.data = { ...payload.data }
        }
      }
    },

    clearAcctData() {
      this.acct.data.id = null
      this.acct.data.name = null
      this.acct.data.permissions = []
      this.acct.error.message = null
      this.acct.error.code = null
    },
  }
})
