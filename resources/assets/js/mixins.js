import Vue from 'vue'
import moment from 'moment-mini'
import padStart from 'lodash-es/padStart'

Vue.mixin({
  methods: {
    range (begin, end) {
      begin = parseInt(begin)
      end = parseInt(end)

      let result = []

      if (begin < end) {
        for (let i = begin; i <= end; i++) {
          result.push(i)
        }
      } else {
        for (let i = begin; i >= end; i--) {
          result.push(i)
        }
      }

      return result
    },

    secondsToTime (seconds) {
      const duration = moment.duration(parseInt(seconds), 'seconds')
      const hours = Math.floor(duration.asHours())

      return (hours ? hours + ':' : '') +
        padStart(duration.minutes(), 2, '0') +
        ':' + padStart(duration.seconds(), 2, '0')
    },

    formatDate (date) {
      return moment(date).format('MM/DD/YYYY')
    }
  }
})
