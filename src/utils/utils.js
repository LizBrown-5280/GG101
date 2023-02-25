//  **********************
//  UTILITIES FUNCTIONS
//  **********************

/**
 * @param { string || number } value a number that is represented by 0 - many digites
 * @returns object that contains the value broken down into 3 Coinss - gold/silver/coppper
 *          along with thier matching icons
 */
export function coinsExch(value) {
  const coinObj = {
    copperCoins: '0',
    silverCoins: '0',
    goldCoins: '0',
    copperIcon: 'https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png',
    silverIcon: 'https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png',
    goldIcon: 'https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png',
  }

  if (!value) return coinObj

  const coins = value.toString().replace(/,/g, '')
  coinObj.copperCoins = coins.slice(-2) || '0'
  coinObj.silverCoins = coins.slice(-4, -2) || '0'
  coinObj.goldCoins = coins.slice(0, -4) || '0'

  return coinObj
}

/**
 * @param {*} list of ids
 * @param {*} chunkSize the max number of ids, in CSV format, that can be requested at one time
 * @returns an array of string ids, with each string cataining no more than the chunkSize amount or 200
 */
export function chunkList(list, chunkSize = 200) {
  let chunkArr = []

  for (let i = 0; i < list.length; i += chunkSize) {
    chunkArr.push(list.slice(i, i + chunkSize).toString())
  }

  return chunkArr
}

export function prepareEndpointUrls(endpoints, getAll = false) {
  let endpointUrls = []

  // Setting up parts of URL
  for (let i = 0; i < endpoints.length; i++) {
    const endpoint = endpoints[i]
    const param = getAll ? '?ids=all' : ''

    endpointUrls.push({
      endpointUrl: '/v2/' + endpoint + param,
      storeAs: { dataType: 'openData', endpointGrp: endpoint },
    })
  }

  return endpointUrls
}

export function concatArrays(result, endpoint) {
  // Concat arrays with the same endpoint as the parameter, leaving all other arrays alone.
  // Concats into the first found matching endpoint using 'j' as 'first found index'
  let j
  for (let i = 0; i < result.length; i++) {
    if (result[i].connectionSucceeded === true && result[i].storeAs.endpointGrp === endpoint) {
      if (j === undefined) {
        j = i
      } else {
        result[j].storeAs.data = result[j].storeAs.data.concat(result[i].storeAs.data)
        result.splice(i, 1)
        i--
      }
    }
  }
  return result
}
