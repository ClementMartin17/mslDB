module.exports = {
  api: {
    hostname: 'localhost',
    port: 3000,
    allowOrigin: 'http://localhost:4200'
  },
  db: {
    urlmongo: 'mongodb://localhost:27017/msl',
    keepAlive: 30000,
    connectTimeoutMS: 30000,
  }
}
