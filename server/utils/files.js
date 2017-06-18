/**
 * Created by jmichelin on 6/17/17.
 */
const fs = require('fs');

exports.readTemplate = readTemplate = (fileName, cb) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) return cb(err);
    cb(null, data);
  });
};