<template>
  <div>
    <div v-if="userName=='editor-token'" class="dashboard-editor-container">
      <div class=" clearfix">
        <pan-thumb :image="avatar" style="float: left">
          Your roles:
          <span class="pan-info-roles">editor</span>
        </pan-thumb>
        <!-- <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" /> -->
        <div class="info-container">
          <span class="display_name">{{ userName }}</span>
          <span style="font-size:20px;padding-top:20px;display:inline-block;">Editor's Dashboard</span>
        </div>
      </div>
      <div>
        <img :src="emptyGif" class="emptyGif">
      </div>
      <div class="text-center date">
        {{ years }} / {{ month }} / {{ day }}
      </div>
      <div class="text-center time">
        {{ hours }} : {{ minutes}} : {{ seconds }}
      </div>
      <div class="text-center date-diff">
        距离春节仅剩 <span> {{ dateDiff }} </span> 天
      </div>
    </div>

    <div v-else class="dashboard-admin-container">
      <!-- <github-corner class="github-corner" /> -->

      <panel-group @handleSetLineChartData="handleSetLineChartData" />

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="8">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <transaction-table />
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <todo-list />
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import Cookies from 'js-cookie'
import PanThumb from '@/components/PanThumb'
import { getToken, setToken, removeToken } from '@/utils/auth'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    PanThumb
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      userName: getToken(),
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      years: null,
      month: null,
      day: null,
      hours: null,
      minutes: null,
      seconds: null,
      dateDiff: null
    }
  },
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    getTime() {
      var time = new Date();
      var years = String(this.aotuZero(time.getFullYear()));
      var month = String(this.aotuZero(time.getMonth() + 1));
      var day = String(this.aotuZero(time.getDate()));
      var hours = String(this.aotuZero(time.getHours()));
      var minutes = String(this.aotuZero(time.getMinutes()));
      var seconds = String(this.aotuZero(time.getSeconds()));

      var dateNow = years + '-' + month + '-' + day;
      var dateDiff = this.getDateDiff(dateNow,'2020-1-25');
      this.years = years;
      this.month = month;
      this.day = day;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.dateDiff = dateDiff;
      // console.log(years,month,day,hours,minutes,seconds,dateDiff)
    },
    getDateDiff(sDate1, sDate2) {  //sDate1和sDate2是yyyy-MM-dd格式
        var aDate, oDate1, oDate2, iDays;
        aDate = sDate1.split("-");
        oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为yyyy-MM-dd格式
        aDate = sDate2.split("-");
        oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
        return iDays;  //返回相差天数
    },
    aotuZero(num) {
      console.log()
      if(String(num).length == 1) {
        return '0' + num
      }else {
        return num
      }
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard-admin-container {
    padding: 32px;
    background-color: #f0f2f5;
    position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
.date {
  font: bold 30px/30px "微软雅黑";
  color: #4eafac;
}
.time {
  font: bold 50px/100px "微软雅黑";
  color: #4eafac;
}
.date-diff {
  font-family: cursive;
  font-size: 30px;
  font-weight: 500;
  span {
    color: #4eafac;
    font: bold 50px/30px "微软雅黑";
    font-family: -webkit-pictograph;
  }
}
</style>
