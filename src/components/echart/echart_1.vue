<!--
 * @Author: Lucky-Firstsnow firstsnow1119@163.com
 * @Date: 2024-03-24 08:19:43
 * @LastEditors: Lucky-Firstsnow firstsnow1119@163.com
 * @LastEditTime: 2024-03-30 16:03:43
 * @FilePath: \双碳数据可视化项目前端\src\components\echart\echart_1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div :id="id" :class="className" :style="{ width: width, height: height }"></div>
</template>

<script>
export default {
    data() {
        return {
            chart: null
        }
    },
    props: {
        id: {
            type: String,
            default: 'chart'
        },
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        },
        options: {
            type: Object,
            default: () => ({})
        }
    },
    watch:{
        options:{
            handler(v){
                this.chart.setOption(v,true)
            },
            deep:true
        }
    },
    mounted(){
        this.initChart()
    },
    methods:{
        initChart(){
            this.chart = echarts.init(this.$el,'tdTheme')
            this.chart.setOption(this.options,true)
        }
    },
    beforeDestroy(){
        this.chart.dispose()
        this.chart = null
    }
}
</script>