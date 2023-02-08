import axios from 'axios'

/**
 * @param { string } endPointUrl - The GW2 endpoint to call
 * @param { string } storeAs - A property name to hold the returned data, if supplied
 * @returns a payload with data or an error msg
 * Note: In main.js --> axios.defaults.baseURL = 'https://api.guildwars2.com'
 */
export function useAxiosGet (endPointUrl) {
  let payload = {}

  return axios.get(endPointUrl)
    .then(response => {
      payload.connectionSucceeded = true
      payload.data = response.data
      return payload
    })
    .catch(err => {
      const e = err.toJSON()
      payload.connectionSucceeded = false
      payload.error = {
        message: e.message,
        code: e.status,
      }
      return payload
    })
}
