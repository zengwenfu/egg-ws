const path = require('path');
module.exports = app => {
  app.on('server', server => {
    const WebSocketServer = require('ws').Server;
    const wss = new WebSocketServer( { server : server } );
    wss.on('connection', function(ws) {
      const dirs = app.loader.getLoadUnits().map(unit => path.join(unit.path, 'app', 'ws'));
      app.ws = ws;
      new app.loader.FileLoader({
        directory: dirs,
        target: {},
        inject: app,
      }).load();
    });
  });
};