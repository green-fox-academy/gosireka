interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  getCodeBooking(): string {
    let code: string = '';
    let possibleChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i: number = 0; i < 8; i++) {
      code = code.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
    }
    return code;
  }
  getDowBooking(): string {
    let DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return DOW[Math.floor(Math.random() * DOW.length)];
  }
  info(): string {
    return `Booking # ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }

}

let res1 = new Reservation();
let res2 = new Reservation();
let res3 = new Reservation();
let res4 = new Reservation();

console.log(res1.info());
console.log(res2.info());
console.log(res3.info());
console.log(res4.info());
