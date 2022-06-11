export class RemainingTime {
  timestamp
  days
  hours
  minutes
  seconds
  negativeDate = true

  /**
   * example: new RemainingTime('2022-12-20')
   */
  constructor (date, negativeDate = true) {
    this.negativeDate = negativeDate
    this.parse(date)
    return this.result()
  }

  parse (date) {
    this.timestamp = this.calculation('timestamp', date)
    this.days = this.calculation('days')
    this.hours = this.calculation('hours')
    this.minutes = this.calculation('minutes')
    this.seconds = this.calculation('seconds')
  }

  calculation (type, date = null) {
    let result

    switch (type) {
      case 'timestamp':
        result = Date.parse(date) - Date.parse(new Date().toString())
        break
      case 'days':
        result = this.timestamp / (1000 * 60 * 60 * 24)
        break
      case 'hours':
        result = (this.timestamp / (1000 * 60 * 60)) % 24
        break
      case 'minutes':
        result = (this.timestamp / 1000 / 60) % 60
        break
      case 'seconds':
        result = (this.timestamp / 1000) % 60
        break
      default:
        result = NaN
        break
    }

    return result < 1 ? 0 : type !== 'timestamp' ? Math.floor(result) : result
  }

  result () {
    return {
      timestamp: this.timestamp,
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    }
  }
}
