function dayOfProgrammer(year) {
    // figure out calendar system
    // leap year
    // end of year - 109 days

    // thank you to this [video](https://www.youtube.com/watch?v=izcafFpBSoM) for telling me the dates.  I did all of the logic.
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