const pbf2json = require('pbf2json')
const through = require('through2')
const { createWriteStream } = require('fs')

const config = {
  file: 'monaco-latest.osm.pbf',
  tags: ['place']
}

pbf2json.createReadStream(config)
  .pipe(through.obj((item, encoding, next) => {
    console.log(item)
    next(item, item)
  }))
  .on('finish', () => console.info('finish'))
