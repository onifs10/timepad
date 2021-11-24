class TickerClass {
  subscriptions: Set<Function>;
  intervalId: ReturnType<typeof setInterval> | undefined;
  constructor() {
    this.subscriptions = new Set();
  }

  subscribe = (func: Function) => {
    const newFunction = () => {
      func();
    };
    this.subscriptions.add(newFunction);
    if (!this.intervalId) {
      this.start();
    }
    return {
      release: () => {
        this.subscriptions.delete(newFunction);
      },
    };
  };

  private emit() {
    this.subscriptions.forEach(func => {
      func();
    });
    if (this.subscriptions.size === 0) {
      this.stop();
    }
  }

  start = () => {
    if (!this.intervalId) {
      let id = setInterval(() => {
        this.emit();
      }, 1000);
      this.intervalId = id;
    }
  };

  stop = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = undefined;
  };
}

export default TickerClass;

export const toHHMMSS = (secs: number | string) => {
  var sec_num = parseInt('' + secs, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map(v => (v < 10 ? '0' + v : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};
