export default {
    limit: 50,
    getUrl(limit) {
        return `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD&api_key=dbc0676b2e6c9c04e72f0464cd2b9f12575132142fe0dabbfcbdb91a213e6070`
    },
    getBaseUrl(coin){
        return `https://www.cryptocompare.com${coin}`
    }
}