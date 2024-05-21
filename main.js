//import
const { StandAloneServer } = require('ads-server')
const adsclient = require('ads-client')

//create adsserver
const server = new StandAloneServer({
  localAmsNetId: '192.168.5.10.1.1', 
  listeningTcpPort: 851,
})

server.listen()
  .then(async conn => {
    console.log('Listening:', conn)
  })
  .catch(err => {
    console.log('Listening failed:', err)
  })

//create adsclient
const client = new adsclient.Client({
    targetAmsNetId: '192.168.5.10.1.1',
    targetAdsPort: 851,
})