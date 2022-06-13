import Accordion from 'accordion-js'
import { RemainingTime } from './plugins/Countdown'
import { tns } from 'tiny-slider/src/tiny-slider'
import '../scss/main.scss'

// .faq section
new Accordion('.faq-accordion', {})

// .main section
// setInterval(() => {
//   const remaining = new RemainingTime('2022-05-31', false)

//   const dom = {
//     days: document.querySelector('.main-timer-countdown-item.days'),
//     hours: document.querySelector('.main-timer-countdown-item.hours'),
//     minutes: document.querySelector('.main-timer-countdown-item.minutes'),
//     seconds: document.querySelector('.main-timer-countdown-item.seconds'),
//   }

//   dom.days.innerHTML = `${remaining.days}д`
//   dom.hours.innerHTML = `${remaining.hours}ч`
//   dom.minutes.innerHTML = `${remaining.minutes}м`
//   dom.seconds.innerHTML = `${remaining.seconds}с`
// }, 1000)

// .program section
new Accordion('.program-accordion', {})

// .reviews section
tns({
  container: '.reviews-carousel',
  items: 1,
  autoplay: true,
  // autoplayTimeout: 3000,
  autoplayButton: false,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  controls: false,
  navPosition: 'bottom',
  mouseDrag: true,
})
