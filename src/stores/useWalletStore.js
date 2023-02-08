import { defineStore } from 'pinia'
import { coinsExch } from '@/utils/utils.js'
import { useAxiosGet } from '@/composables/useAxiosGet'

export const useWalletStore = defineStore('walletData', {
  state: () => ({
    permissionsRestricted: false,

    openData: {
      endpointUrl: '/v2/currencies?ids=all',
      connectionSucceeded: '',
      error: {},
      data: []
    },
    acct: {
      key: '',
      endpointUrl: '/v2/account/wallet?access_token=',
      connectionSucceeded: '',
      error: {},
      data: []
    },
    acctDemo: {
      connectionSucceeded: true,
      data: [
        {
          id: 1,
          value: 1111111
        },
        {
          id: 2,
          value: 555555
        },
        {
          id: 3,
          value: 315
        },
        {
          id: 4,
          value: 8888
        },
        {
          id: 7,
          value: 15
        },
        {
          id: 9,
          value: 60
        },
        {
          id: 11,
          value: 1
        },
        {
          id: 13,
          value: 63
        },
        {
          id: 15,
          value: 2204
        },
        {
          id: 16,
          value: 5
        },
        {
          id: 18,
          value: 168
        },
        {
          id: 19,
          value: 8003
        },
        {
          id: 20,
          value: 696
        },
        {
          id: 22,
          value: 1100
        },
        {
          id: 23,
          value: 1286
        },
        {
          id: 25,
          value: 498
        },
        {
          id: 27,
          value: 1970
        },
        {
          id: 32,
          value: 6978
        },
        {
          id: 34,
          value: 1413
        },
        {
          id: 35,
          value: 60
        },
        {
          id: 37,
          value: 175
        },
        {
          id: 38,
          value: 12
        },
        {
          id: 40,
          value: 81
        },
        {
          id: 41,
          value: 51
        },
        {
          id: 42,
          value: 22
        },
        {
          id: 43,
          value: 5
        },
        {
          id: 44,
          value: 9
        },
        {
          id: 45,
          value: 2400
        },
        {
          id: 47,
          value: 1
        },
         {
          id: 62,
          value: 555
        }
      ],
    },
  }),

  getters: {
    getCurrencies: state => [...state.openData.data].sort((a, b) => a.order - b.order),
    getAcctLen: state => state.acct.data.length,
    getDemo: state => state.acctDemo.data,
  },

  actions: {
    async callApiOpenData(type) {
      const payload = await useAxiosGet(this.openData.endpointUrl)
      // build for error
      this.openData.connectionSucceeded = payload.connectionSucceeded
      this.openData.error = { ...payload.error }
      this.openData.data.push(...payload.data)

      if (type === 'currencies' && payload.connectionSucceeded) {
        this.openData.data[0].coins = {
          copperIcon: 'https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png',
          silverIcon: 'https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png',
          goldIcon: 'https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png',
        }
      }
    },

    async callApiAcctData(key) {
      if (key === this.acct.key) return

      this.acct.key = key
      this.clearCurrenciesAmounts()
      this.clearAcctData()
      const payload = await useAxiosGet(this.acct.endpointUrl + key)
      this.acct.connectionSucceeded = payload.connectionSucceeded
      this.acct.error = { ...payload.error }

      if (this.acct.connectionSucceeded) {
        this.acct.data.push(...payload.data)
        this.openData.data = matchAcctAmts(this.openData.data, this.acct.data)
      }
    },

    setupDemo() {
      this.clearCurrenciesAmounts()
      this.clearAcctData()
      this.openData.data = matchAcctAmts(this.openData.data, this.acctDemo.data)
    },

    clearCurrenciesAmounts() {
      let len = this.openData.data.length
      for (let i = 0; i < len; i++) this.openData.data[i].amount = null 
      this.openData.data[0].coins.copperCoins = null
      this.openData.data[0].coins.silverCoins = null
      this.openData.data[0].coins.goldCoins = null
    },

    clearAcctData() {
      this.acct.data = []
    }
  },
})

function matchAcctAmts(currencies, acctData) {
  acctData = JSON.parse(JSON.stringify(acctData))
  currencies.forEach(currency => { 
    if (currency.id === acctData[0]?.id) {
      currency.amount = acctData[0].value.toLocaleString()
      acctData.shift()
    }
    else currency.amount = '0'
  })

  return currencies
}
