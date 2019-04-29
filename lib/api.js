const request = require('request')
const queryString = require('query-string');
const crypto = require('crypto');
const endpoints = require('./endpoints')

module.exports = function Api(key, secret) {
    const baseUrl = 'https://api.binance.com'

    const createHash = query => crypto.createHmac('sha256', secret).update(query).digest('hex')
    
    Object.keys(endpoints).map(endpoint => {
        this[endpoint] = (callback, params = {}) => {

            const options = {}
            options.headers = {}
            options.method = endpoints[endpoint].method || 'GET'
            options.headers['X-MBX-APIKEY'] = key

            let query = params ? queryString.stringify(params) : ''
            options.uri = baseUrl + endpoints[endpoint].path + '?' + query

            if (endpoints[endpoint].signed) {
                const timestamp = Date.now()
                query += `&timestamp=${timestamp}`
                options.uri += `&timestamp=${timestamp}&signature=${createHash(query)}`
            }

            request(options, (err, res, body) => {
                if (err) return callback(err)
                return callback(null, body)
            })
        }
    })
}
