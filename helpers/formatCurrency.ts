class Numeral {
  static formatCurrency(number: any, currency?: string) {
    const currencySign = currency || "$";
    try {
      let separator = ",";
      let number1 = parseInt(
        (number = Math.abs(Number(number) || 0).toFixed(0))
      ).toString();
      let number2 = number1.length > 3 ? number1.length % 3 : 0;
      return `${currencySign} ${
        (number2 ? number1.substr(0, number2) + separator : "") +
        number1.substr(number2).replace(/(\d{3})(?=\d)/g, separator)
      }`;
    } catch (error) {
      return `${currencySign} 0`;
    }
  }
  static reverseFormat(currency: string): any {
    const splitCurrency = currency?.split("");
    const madNumbers = splitCurrency?.map((c: any) =>
      parseInt(c.replace(/\D/g, ""), 10)
    );
    const parsedNumbers = JSON.parse(JSON.stringify(madNumbers));
    const result = parsedNumbers
      ?.filter((value: any) => typeof value !== "object")
      ?.join("");
    return Number(result);
  }
}

export default Numeral;
