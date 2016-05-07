var args = module.exports = require('yargs')
  .usage('Usage: msm <command>')
  .command('publish','publishes the current directory as a microservice')
  .demand(1)
  .help('h')
  .alias('h','help')
  .argv
