module.exports = {
    ping: {
        path: '/api/v1/ping'
    },
    time: {
        path: '/api/v1/time'
    },
    exchangeInfo: {
        path: '/api/v1/exchangeInfo'
    },
    book: {
        path: '/api/v1/depth'
    },
    recentTrades: {
        path: '/api/v1/trades'
    },
    historicalTrades: {
        path: '/api/v1/historicalTrades'
    },
    aggTrades: {
        path: '/api/v1/aggTrades'
    },
    candles: {
        path: '/api/v1/klines'
    },
    avgPrice: {
        path: '/api/v3/avgPrice'
    },
    ticker24: {
        path: '/api/v1/ticker/24hr'
    },
    tickerLatest: { 
        path: '/api/v3/ticker/price'
    },
    tickerBook: {
        path: '/api/v3/ticker/bookTicker'
    },
    testOrder: {
        path: '/api/v3/order/test',
        method: 'POST',
        signed: true
    },
    createOrder: {
        path: '/api/v3/order',
        method: 'POST',
        signed: true
    },
    queryOrder: {
        path: '/api/v3/order',
        signed: true
    },
    cancelOrder: {
        path: '/api/v3/order',
        method: 'DELETE',
        signed: true
    },
    openOrders: {
        path: '/api/v3/openOrders',
        signed: true
    },
    allOrders: {
        path: '/api/v3/allOrders',
        signed: true
    },
    account: {
        path: '/api/v3/account',
        signed: true
    },
    trades: {
        path: '/api/v3/account', 
        signed: true
    },
    userStream: {
        path: '/api/v1/userDataStream',
        method: 'POST'
    }
}