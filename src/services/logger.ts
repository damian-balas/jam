/* eslint-disable no-console */
class Logger {
  static log(msg: string): void {
    console.log(msg);
  }

  static error(msg: string): void {
    console.error(msg);
  }
}

export default Logger;
