import { defineStore } from 'pinia'

export const useGw2WalletDemoData = defineStore('Gw2WalletDemoData', {
  state: () => ({
    wallet: {
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
        }
      ],
    }
  }),

  getters: {
    getWalletDemoData: state => state.wallet,
  },
})
