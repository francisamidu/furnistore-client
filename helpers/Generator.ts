const { v4 } = require("uuid");
class Generator {
  static generateId(): string {
    return v4();
  }
  static generateRandomNumber(count: number): number {
    const number = Math.random()
      .toString()
      .slice(2, count >= 8 ? count : 8);
    return Number(number);
  }
}

export default Generator;
