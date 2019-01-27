const ruuvi = require('node-ruuvitag');
const cron = require('cron').CronJob;
const request = require('request');
import { url } from './settings';

let tags: any = {};


ruuvi.on('found', (tag: any) => {
  tag.on('updated', (data: any) => {
    if (data !== {}) {
      tags[tag.id] = data;
    }
  });
});

new cron(
  '0/30 * * * * *',
  () => {
    console.log(new Date());
    console.log(JSON.stringify(tags, null, '\t'));
    request.post(url,
      { json: true, body: tags },
      (error: any, response: any, body: any) => {
        console.log('error:', error);
        console.log('body:', body);
      }
    );
  },
  null,
  true,
  'Europe/Helsinki'
);
