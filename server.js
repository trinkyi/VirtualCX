//importing ads-server
const { StandAloneServer } = require('ads-server')

const server = new StandAloneServer({
  localAmsNetId: '192.168.5.10.1.1', 
  listeningTcpPort: 851,
})

server.listen()
  .then(async conn => {
    console.log('Listening:', conn)

    //To stop listening:
    //await server.close()
  })
  .catch(err => {
    console.log('Listening failed:', err)
  })