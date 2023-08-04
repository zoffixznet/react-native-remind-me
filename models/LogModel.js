const DEBUG = true;

class LogLine {
    constructor({type, text, time}) { Object.assign(this, {type, text, time}); }
    toString() { 
        const time_s = this.time.toLocaleTimeString('en-US', { hour12: false });
        return `[${time_s}] ${this.type.toUpperCase()}: ${this.text}`;
    }
}

class LogModel {
  constructor() { this.log = []; }

  log_message(type, text) {
    if ( ! ['error', 'warning', 'info', 'debug'].includes(type))
        throw new Error(`${type} is not a valid log type`);
    
    const line = new LogLine({type, text, time: new Date()});
    DEBUG && console.log(line.toString());
    this.log.push(line);
  }
  debug  (text) { this.log_message('debug',   text); }
  info   (text) { this.log_message('info',    text); }
  warning(text) { this.log_message('warning', text); }
  error  (text) { this.log_message('error',   text); }
}

export default LogModel;