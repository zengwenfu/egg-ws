# egg-ws
egg plugin for websocket

## Install

```bash
$ npm i egg-ws --save
```

## Requirements

- Node.js >= 8.0
- Egg.js >= 2.0

## Configuration

Change `${app_root}/config/plugin.js` to enable Socket.IO plugin:

```js
// {app_root}/config/plugin.js
exports.io = {
  enable: true,
  package: 'egg-ws',
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