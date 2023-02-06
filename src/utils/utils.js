//  **********************
//  UTILITIES FUNCTIONS
//  **********************

/**
 * 
 * @param { string || number } value a number that is represented by 0 - many digites
 * @returns object that contains the value broken down into 3 Coinss - gold/silver/coppper
 *          along with thier matching icons
 */
export function coinsExch(value) {
  value = value.toString()

  const coins = value.replace(/,/g, '')
  const coinObj = {}

  coinObj.copperIcon = 'https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png'
  coinObj.copperCoins = coins.slice(-2)

  let silverCoins = coins.slice(-4, -2)
  let goldCoins = coins.slice(0, -4)

  if (goldCoins > 0) {
    coinObj.goldIcon = 'https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png'
    coinObj.goldCoins = goldCoins
  }

  if (goldCoins > 0 || silverCoins > 0) {
    coinObj.silverIcon = 'https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png'
    coinObj.silverCoins = silverCoins
  }

  return coinObj
}
