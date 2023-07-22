const DEBUG = true;

class LogLine {
    constructor({type, text, time}) { Object.assign(this, {type, text, time}); }
    toString() { 
        time_s = this.time.toLocaleTimeString('en-US', { hour12: false });
        return `[${time_s}] ${type.toUpperCase()}: ${text}`;
    }
}

class LogModel {
  constructor() { this.log = []; }

  log(type, text) {
    if ( ! ['error', 'warning', 'info'].includes(type))
        throw new Error(`${type} is not a valid log type`);
    
    const line = new LogLine(type, text, new Date());
    DEBUG && console.log(line.toString());
    this.log.append(line);
  }
  info   (text) { this.log('info',    text); }
  warning(text) { this.log('warning', text); }
  error  (text) { this.log('error',   text); }
}

export default LogModel;