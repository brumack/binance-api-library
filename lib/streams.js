module.exports = {
    // aggregate trades                 <symbol>@aggTrade
    // trades                           <symbol>@trade
    // klines                           <symbol>@kline_<interval>
    // individual symbol ticker mini    <symbol>@miniTicker
    // all market ticker mini           !miniTicker@arr
    // individual symbol ticker         <symbol>@ticker
    // all market ticker                !ticker@arr
    // partial book depth               <symbol>@depth<levels>
    // diff depth                       <symbol>@depth
}