<template>
    <div class="chart-wrap">
        <div id="chart-bar" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('chart-bar'))
      var xAxisData = ['One','Two','Three','four','Five','Six','Seven','Eight','Nine','Twn'];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];  
      for (var i = 0; i < 10; i++) {
          data1.push((Math.random() * 2).toFixed(2));
          data2.push(-Math.random().toFixed(2));
          data3.push((Math.random() * 5).toFixed(2));
          data4.push((Math.random() + 0.3).toFixed(2));
      }
      var itemStyle = {
         normal: {
         },
         emphasis: {
             barBorderWidth: 1,
             shadowBlur: 10,
             shadowOffsetX: 0,
             shadowOffsetY: 0,
             shadowColor: 'rgba(0,0,0,0.5)'
         }
      };
      this.chart.setOption({
        backgroundColor: '#344b58',
        legend: {
            data: ['barOne', 'barTwo', 'barThree', 'barFour'],
            align: 'left',
            left: 20,
            top: 20,
            textStyle: {
                color: '#90979c'
            }
        },
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0,
            outOfBrush: {
                colorAlpha: 1
            }
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {}
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            name: 'X Axis',
            silent: false,
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: '#90979c'
                }
            },
            splitLine: {show: false},
            splitArea: {show: false}
        },
        yAxis: {
            inverse: true,
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            splitArea: {show: false}
        },
        grid: {
            left: 100,
            top:80
        },
        visualMap: {
            type: 'continuous',
            dimension: 1,
            text: ['High', 'Low'],
            inverse: true,
            itemHeight: 200,
            calculable: true,
            min: -2,
            max: 6,
            top: 60,
            left: 10,
            inRange: {
                colorLightness: [0.4, 0.8]
            },
            outOfRange: {
                color: '#bbb'
            },
            controller: {
                inRange: {
                    color: '#2f4554'
                }
            },
            textStyle: {
                color: '#90979c'
            }
        },
        series: [
            {
                name: 'barOne',
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: data1
            },
            {
                name: 'barTwo',
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: data2
            },
            {
                name: 'barThree',
                type: 'bar',
                stack: 'two',
                itemStyle: itemStyle,
                data: data3
            },
            {
                name: 'barFour',
                type: 'bar',
                stack: 'two',
                itemStyle: itemStyle,
                data: data4
            }
        ]
      })
    }
  }
}
</script>
