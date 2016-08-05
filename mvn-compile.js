'use strict';

const shell = require('shelljs');

shell.config.fatal = true;

try {
  if (!shell.which('java')) {
    process.stderr.write('please install [java] first.\n');
  }

  if (!shell.which('mvn')) {
    process.stderr.write('please install [mvn] first.\n');
  }

  if (shell.exec('mvn clean').code !== 0) {
    process.stderr.write('mvn clean >> execution failed.\n');
  }

  if (shell.exec('mvn compile').code !== 0) {
    process.stderr.write('mvn compile >> execution failed.\n');
  }
}
catch (error) {
  process.stderr.write(`${error}\n`);
}
