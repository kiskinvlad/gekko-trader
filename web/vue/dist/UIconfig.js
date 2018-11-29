// Note: this file gets copied around, make sure you edit
// the UIconfig located at `gekko/web/vue/dist/UIconfig.js`.

// This config is used by both the frontend as well as the web server.
// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html#Configuring-Gekko

// const CONFIG = {
//   headless: false,
//   api: {
//     host: '127.0.0.1',
//     port: 3000,
//     timeout: 120000 // 2 minutes
//   },
//   ui: {
//     ssl: false,
//     host: 'localhost',
//     port: 3000,
//     path: '/'
//   },
//   adapter: 'sqlite'
// }

const CONFIG = {
  headless: true,
  api: {
      host: '127.0.0.1',
      port: 3000,
  },
  ui: {
      ssl: false,
      host: 'localhost', //here you address
      port: 3000,
      path: '/' // change this if you are serving from something like `example.com/gekko`
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
