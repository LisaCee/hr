function dayOfProgrammer(year) {
    //day of programmer = 256
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 365
    if (year >= 1700 && year <= 1917) {
      console.log('Julian')
      //leap years % 4 === 0
      if (year % 4 === 0) {
        months[1] = 29;
        days += 1
      }
  
    for (let i = months.length -1; i > 0; i--) {
  
      while (days > 256) {
        days -= months[i]
        console.log(days)
      }
    }
    }
    // } else if (year >= 1919 && year <= 2700) {
    //   console.log('Gregorian')
    //   // leap years % 400 === 0 or leap years % 4 !100
    //   if (year % 400 === 0) {
  
    //   } else if (year % 4 === 0 && year % 100 !== 0) {
  
    //   }
    // } else if (year === 1918) {
    //   console.log('Transition year')
    // }
    // return dd/mm/yyyy
  
  }
  
  dayOfProgrammer(1916)