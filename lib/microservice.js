var log = require('./log.js')
var path = require('path')
var ms = module.exports = require(path.join(process.cwd(),'microservice.json'))

// Validate microservice
if(!ms.name) {
  log.error('microservice.json requires a name')
  process.exit(1)
}
if(!ms.version) {
  log.error('microservice.json requires a version')
  process.exit(1)
}
if(!ms.description) {
  log.warn('microservice.json does not provide a description')
}
if(!ms.license) {
  log.warn('microservice.json does not provide a license')
}
