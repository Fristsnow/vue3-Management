<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:29:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-25 15:45:57
 * @FilePath: \web-pc\src\pages\big-screen\components\echart\index.vue
-->
<template>
  <div :id="id" :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import tdTheme from './theme.json'
export default {
  name: 'echart',
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    className: {
      type: String,
      default: 'chart'
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler(v) {
        this.chart.setOption(v, true)
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'tdTheme');
      this.chart.setOption(this.options, true)
    }
  }
}
</script>

<style>
</style>
