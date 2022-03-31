function equals(x, y) {
    if(1 / x === Infinity && 1 / y === -Infinity) {
        return false
    } else if(Number.isNaN(x) && Number.isNaN(y)) {
        return true
    } else {
        return x === y
    }
  }

  
  console.log(equals("12", 12) === false);
  console.log(equals(0, -0) === false);
  console.log(equals(0, NaN) === false);
  console.log(equals(NaN, 0) === false);
  console.log(equals(5, "5") === false);
  console.log(equals("john", "doe") === false);
  console.log(equals(false, true) === false);
  console.log(equals(undefined, null) === false);
  
  console.log(equals("john", "john") === true);
  console.log(equals(-0, -0) === true);
  console.log(equals(5, 5) === true);
  console.log(equals(false, false) === true);
  console.log(equals(null, null) === true);
  console.log(equals(undefined, undefined) === true);
  console.log(equals(NaN, NaN) === true);
  console.log(equals(0, 0) === true);
