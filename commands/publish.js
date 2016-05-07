var tar = require('tar')
var fstream = require('fstream')
var request = require('request')
var log = require('../lib/log.js')
var request = require('request')
var urljoin = require('url-join')
var path = require('path')
var zlib = require('zlib')

module.exports = function(args,ms) {
  var packer = tar.Pack({noProprietary:true})
    .on('error',function(e) {
      log.error('Failed to create tarball')
      log.error(e.stack)
      process.exit(1)
    })
  var gzip = zlib.createGzip()
  var url = urljoin('http://localhost:8765',ms.name,ms.version)
  var upload = request.post(url)
    .on('error',function(e) {
      log.error('Failed to upload to the server')
      log.error(e.stack)
      process.exit(1)
    })
    .on('finish',function() {
      log.info('Finished uploading!')
    })
  fstream.Reader({ path: path.join(__dirname,'..'), type: 'Directory' })
    .on('error',function(e) {
      log.error('Failed to read from the filesystem')
      log.error(e.stack)
      process.exit(1)
    })
    .pipe(packer)
    .pipe(gzip)
    .pipe(upload)
}
