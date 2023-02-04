import { defineStore } from 'pinia'

export const useGW2Store = defineStore('GW2Store', {
  state: () => ({
    /** __________ Key & Permission _________**/
    apiKey: null,
    apiKeyErrorMsg: null,
    permissions: null,

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
      openData: {
        colors: [],
        dyes: [],
        finishers: [],
        gliders: [],
        items: [],
        itemsCompleted: [],
        mailcarriers: [],
        materials: [],
        minis: [],
        mountsskins: [],
        mountstypes: [],
        novelties: [],
        outfits: [],
        professions: [],
        ranks: [],
        sharedInvSlots: [],
        skinItems: [],
        skins: [],
        wallet: [],
        world: []
      }
    }
  }),

  getters: {
    getTabNav: state => state.tabNav,
    getApiKey: state => state.apiKey,
    getKeyErrorMgs: state => state.apiKeyErrorMsg,
    getPermissions: state => state.permissions,
  },

  actions: {
    updateUserApiKey(userKey) { 
      this.apiKey = userKey
      console.log('this.apiKey', this.apiKey)
    },
    getOpenData() { 
      console.log('hahahahah')
    }
  }
})
