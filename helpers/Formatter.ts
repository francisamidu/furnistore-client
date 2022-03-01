import dayJs from "dayjs";
class Formatter {
  static formatDate(date: string | Date, dashed?: boolean) {
    let newDate = null;
    if (dashed) {
      newDate = dayJs(date).format("MM-DD-YYYY");
    }
    newDate = dayJs(date).format("MMMM DD,YYYY");
    return newDate;
  }
  static formatDateAndTime(date: string | Date) {
    const newDate = dayJs(date).format("DD MMM YY, HH:MM");
    return newDate;
  }
  static formatRelativeDate(date: string | Date) {
    const newDate = dayJs(date).startOf("month").format("YYYY-MM-DD");
    return newDate;
  }
  static formatCurrency(number: any, currency?: string) {
    const currencySign = currency || "$";
    try {
      let separator = ",";
      let number1 = parseInt(
        (number = Math.abs(Number(number) || 0).toFixed(0))
      ).toString();
      let number2 = number1.length > 3 ? number1.length % 3 : 0;
      return `${currencySign} ${
        (number2 ? number1.substring(0, number2) + separator : "") +
        number1.substring(number2).replace(/(\d{3})(?=\d)/g, separator)
      }`;
    } catch (error) {
      return `${currencySign} 0`;
    }
  }
  static formatNumber(number: any) {
    try {
      let separator = ",";
      let number1 = parseInt(
        (number = Math.abs(Number(number) || 0).toFixed(1))
      ).toString();
      let number2 = number1.length > 3 ? number1.length % 3 : 0;
      const number3 = `${
        (number2 ? number1.substring(0, number2) + separator : "") +
        number1.substring(number2).replace(/(\d{3})(?=\d)/g, separator)
      }`;
      return number3;
    } catch (error) {
      return `0`;
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

export default Formatter;
