<template>
  <div class="hello">
    <h3>Default</h3>
    <vue-datepicker-local v-model="time"/>
    <h3>Year</h3>
    <vue-datepicker-local v-model="time" format="YYYY"></vue-datepicker-local>
    <h3>Month</h3>
    <vue-datepicker-local v-model="time" format="YYYY-MM"></vue-datepicker-local>
    <h3>Time</h3>
    <vue-datepicker-local v-model="time" format="YYYY-MM-DD HH:mm:ss"></vue-datepicker-local>
    <h3>Disabled</h3>
    <vue-datepicker-local v-model="time" disabled></vue-datepicker-local>
    <h3>Clearable</h3>
    <vue-datepicker-local v-model="emptyTime" clearable></vue-datepicker-local>
    <vue-datepicker-local v-model="emptyRange" clearable></vue-datepicker-local>
    <h3>Range</h3>
    <vue-datepicker-local v-model="range"></vue-datepicker-local>
    <h3>Range Separator</h3>
    <vue-datepicker-local v-model="range" range-separator="至"></vue-datepicker-local>
    <h3>disabledDate</h3>
    <vue-datepicker-local v-model="time" :disabled-date="disabledDate"></vue-datepicker-local>
    <h3>Local</h3>
    <vue-datepicker-local v-model="time" :local="local" format="YYYY-MM-DD HH:mm:ss"></vue-datepicker-local>
    <h3>Inline Mode</h3>
    <vue-datepicker-local v-model="time" type="inline"></vue-datepicker-local>
    <h3>Show Buttons</h3>
    <vue-datepicker-local v-model="time" @confirm="confirm" show-buttons></vue-datepicker-local>
  </div>
</template>

<script>
  import VueDatepickerLocal from 'vue-datepicker-local'

  export default {
    name: 'HelloWorld',
    components: {
      VueDatepickerLocal
    },
    data() {
      return {
        time: new Date(),
        range: [new Date(), new Date()],
        emptyTime: '',
        emptyRange: [],
        local: {
          dow: 0, // Sunday is the first day of the week
          hourTip: 'Select Hour', // tip of select hour
          minuteTip: 'Select Minute', // tip of select minute
          secondTip: 'Select Second', // tip of select second
          yearSuffix: '', // suffix of head year
          monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
          months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
          weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), // weeks,
          cancelTip: 'cancel',
          submitTip: 'confirm'
        }
      }
    },
    methods: {
      //disable the weekend
      disabledDate(time) {
        var day = time.getDay();
        return day === 0 || day === 6;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
