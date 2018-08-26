import jsf from 'json-schema-faker';
import faker from 'faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', function() {
  return faker;
});

jsf.resolve(schema).then(function (result) {
  fs.writeFile('./src/api/db.json', JSON.stringify(result, null, 2), function (err) {
    if (err) {
      return console.log(chalk.red(err)); // eslint-disable-line no-console
    } else {
      console.log(chalk.green('Mock data generated.')); // eslint-disable-line no-console
    }
  });
});

