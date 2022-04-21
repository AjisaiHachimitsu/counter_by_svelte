export default class Counter {
  title: string;
  private count: number = 0;
  get Count() {
    return this.count;
  }
  constructor(title: string = "") {
    this.title = title;
  }

  IncreaseCount() {
    this.count++;
  }
  DecreaseCount() {
    if (this.count >= 1) {
      this.count--;
    }
  }
  ResetCount() {
    this.count = 0;
  }

  static Sum(counters: Readonly<Counter>[]) {
    let sum = 0;
    for (let item of counters) {
      sum += item.Count;
    }
    return sum;
  }

  static TitleList(counters: Counter[], delimiter = ",") {
    let str = "";
    for (let item of counters) {
      str += item.title + delimiter;
    }
    return str.slice(0, -1);
  }
}
