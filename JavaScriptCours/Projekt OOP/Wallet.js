class Wallet {
 constructor(money) {
  let _money = money;

  this.getWalletValue = () => _money;

  this.checkCanPlay = (cash) => cash <= _money;

  this.changeBalance = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "-") {
     return _money -= value;
    } else if (type === "+") {
     return _money += value;
    } else {
     throw new Error("Nieprawidłowy typ działania")
    }
   } else {
    throw new Error("Nieprawidłowa liczba")
   }
  }
 }
}