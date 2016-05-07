var args = require('./lib/args.js')
var log = require('./lib/log.js')
var path = require('path')

var command = args._[0]
var ms = require('./lib/microservice.js')

switch(command) {
  case 'publish':
    require('./commands/publish.js')(args,ms)
    break;
  default:
    log.error(command+' is not a command')
}
