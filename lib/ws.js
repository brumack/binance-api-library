const Socket = require('ws')
const API = require('./api')
require('dotenv').config();

module.exports = function WS (api, options, handler) {
    const baseUrl = ' wss://stream.binance.com:9443'

        if (options.type === 'userStream') {
            api.userStream((err,response) => {
                const socketUrl = baseUrl + '/stream?streams=' + JSON.parse(response).listenKey
                createSocket(socketUrl, handler)
            })
        } else {
            const socketUrl = baseUrl + '/stream?streams=' + options.symbols.map(symbol => {
                switch(options.type) {
                    case 'aggTrade':
                        return `${symbol}@aggTrade/`
                    case 'trade':
                        return `${symbol}@trade/`
                    case 'kline':
                        return `${symbol}@kline_${options.interval}`
                    case '24hrMiniTicker':
                        return `${symbol}@miniTicker/`
                    case 'marketMiniTicker':
                        return '!miniTicker@arr/'
                    case 'individualTicker':
                        return `${symbol}@ticker/`
                    case 'allMarketTickers':
                        return `!ticker@arr/`
                    case 'partialBook':
                        return `${symbol}@depth${options.level}/`
                    case 'diffDepth':
                        return `${symbol}@depth/`
                    default:
                        throw 'Error: invalid stream type'
                }
            })
            createSocket(socketUrl, handler)
        }
}

function createSocket(url, handler) {
    const socket = new Socket(url)

    socket.on('message', msg => {
        let event;
        try {
            event = JSON.parse(msg)
        } catch (e) {
            event = msg
        }
        handler(msg)
    })
}