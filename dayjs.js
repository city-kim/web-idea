import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

Object.defineProperties(Vue.prototype, {
  $date: {
    get () {
      return dayjs
    }
  }
})

// main.js에서 import '@/util/dayjs.js'
// vue에서 this.$date... 으로 사용가능
