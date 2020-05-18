import log4js from 'log4js';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    file: { type: 'file', filename: './logs/server.log', encoding: 'utf-8' },
  },
  categories: {
    default: { appenders: ['out'], level: 'debug' },
    error: { appenders: ['out', 'file'], level: 'error', enableCallStack: true },
  },
});

export default log4js;
