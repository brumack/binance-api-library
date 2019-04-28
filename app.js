const Api = require('./lib/api')
const WS = require('./lib/ws')

const api = new Api()

const options = {
    symbol: 'BTCUSDT',
    side: 'BUY',
    type: 'MARKET',
    quantity: 1
}



// new WS({ symbols: ['btcusdt'], type: 'trade' }, msg => {
//     console.log(msg)
// })

new WS(api, { symbols: [], type: 'userStream' }, msg => {
    console.log(msg)
})

setTimeout(() => {
    api.createOrder((err, data) => {
        if (err) console.error(err)
        console.log(JSON.parse(data))
    }, options)
}, 5000)

