<template>
  <div>
    <div class="dashboard-editor-container">
      <div class=" clearfix">
        <pan-thumb :image="avatar" style="float: left">
          Your roles:
          <span class="pan-info-roles">editor</span>
        </pan-thumb>
        <!-- <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" /> -->
        <div class="info-container">
          <span class="display_name">Normal Editor</span>
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
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  components: { PanThumb },
  name: 'DashboardEditor',
  data() {
    return {
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
