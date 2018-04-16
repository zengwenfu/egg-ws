# egg-wss
egg plugin for websocket

## Install

```bash
$ npm i egg-wss --save
```

ps: the npm package name is "**egg-wss**" (not "egg-ws"), because the "egg-ws" is use by someone, but do nothing

## Requirements

- Node.js >= 8.0
- Egg.js >= 2.0

## Configuration

Change `${app_root}/config/plugin.js` to enable Socket.IO plugin:

```js
// {app_root}/config/plugin.js
exports.wss = {
  enable: true,
  package: 'egg-wss',
};
```

## Deployment

## Usage

### Directory Structure

```
app
├── ws
│   ├── chat.js
config
 └── plugin.js
```

### example
```js
/******************* app/ws/chat.js ****************/
// listen
module.exports = app => {
  app.ws.on('message', function(data, flags) {
    // console.log(data);
  });
};

/******************** app/controller/home.js ********/
// send
 async send() {
    ...
    app.ws.send('hello world!!!')
    ...
  }
```

## Questions & Suggestions

Please open an issue [here](https://github.com/zengwenfu/egg-ws/issues).

## License

[MIT](LICENSE)