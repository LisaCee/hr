function dayOfProgrammer(year) {
    //day of programmer = 256
    // julian 1700 - 1917
    // leap / 4
    // gregorial 1919-2700
    
    // 1918, January 31 -> Feb 14 (32nd day)
  

    // figure out calendar system
    // leap year
    // end of year - 109 days
    if (year === 1918) {
      // transition year
      return '26.09.1918'
    }
    else if (year >= 1700 && year <= 1917) {
      // julian calendar
      if (year % 4 == 0) {
        //leap year
        return `12.09.${year}`
      } else {
        return `13.09.${year}`
      }
    } else if (year >= 1919 && year <= 2700) {
      // leap / 400 or leap / 4 !100
      if (year % 400 === 0) {
        return `12.09.${year}`
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return `12.09.${year}`
      } else {
        return `13.09.${year}`
      }
    }
  }
  
  dayOfProgrammer(1916)