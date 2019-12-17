<template>
    <div class="content-wrap">
        <el-row>
            <el-col class="headers-img">
                <img src="@/assets/dashboard_img.jpg">
                <ul class="autoWrap">
                    <li :class="'active' + i" v-for="(item, i) in num" :key="i">
                        <div class="bottom">
                            <div class="top">0</div>
                            <div class="bot">0</div>
                            <div class="mask"></div>
                        </div>
                        <div class="backTop">
                            <div class="inner">0</div>
                            <div class="mask"></div>
                        </div>
                        <div class="justTop">0</div>
                        <div class="next">0</div>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num:[1,2,3,4,5,6],
            surplusTime:null
        }
    },
    created() {
        this.moneyAll();
        setInterval(()=>{
            // this.moneyAll()
            this.getSurplusTime();
        },1000)
        // setInterval(()=>{
        //     moneyAll().then(data=>{
        //         //console.log(data)
        //         var allNum = data.data.split('.')[0];
        //         var timeArr = [];
        //         for(var i=0;i<allNum.length;i++){
        //             var arr = {};
        //             arr.num = allNum[i];
        //             arr.index = i;
        //             timeArr.push(arr)
        //         }
        //         //timeArr = [{num:'3',index:0},
        //         //            {num:'1',index:1},
        //         //            {num:'8',index:2},
        //         //            {num:'4',index:3},
        //         //            {num:'5',index:4}]
        //         this.setIntervalNum = timeArr;
        //         for(var i=0;i<timeArr.length;i++) {
        //             if(timeArr[i].num !== this.num[i].num) {
        //                 this.animationNum('.active' + timeArr[i].index,timeArr[i].num,timeArr,timeArr[i].index,true)
        //             }
        //             if(i == timeArr.length-1) {
        //                 setTimeout(()=>{
        //                     this.num = timeArr;
        //                 })
        //             }
        //         }
        //     })
        // },1000)//(1000*60)*3
    },
    methods: {
        getThistime(){//当前日期
            var date = new Date();
            var year = date.getFullYear(); 
            var month = date.getMonth()+1;  
            var day = date.getDate();
            var time = year+"/"+month+"/"+day;
            return time;
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
        getSurplusTime() {
            var thisTime = this.getThistime();
            var dateDiffTime = this.getDateDiff(thisTime,'2020-1-25');
            this.surplusTime = dateDiffTime;
        },
        moneyAll() {
                // var allNum = data.data.split('.')[0];
                // var timeArr = [];
                // for(var i=0;i<allNum.length;i++){
                //     var arr = {};
                //     arr.num = allNum[i];
                //     arr.index = i;
                //     timeArr.push(arr)
                // }
                // this.map.data = data.data;
                // this.num = timeArr;
                // this.prveNumAll = timeArr;
                var time = new Date();
                var years = time.getFullYear();
                var month = time.getMonth()+1;
                var day = time.getDate();
                var hours = time.getHours();
                var minutes = time.getMinutes();
                var seconds = time.getSeconds()
                month = this.filterMonth(month);
                years = this.filterMonth(years);
                day = this.filterMonth(day);
                hours = this.filterMonth(hours);
                minutes = this.filterMonth(minutes);
                seconds = this.filterMonth(seconds);
                var timeStr = String(hours) + String(minutes) + String(seconds);
                var timeArr = timeStr.split('')
                var dateArr = [];
                // console.log(years,month,day,hours,minutes,seconds,timeArr)
                for(var i=0;i<timeArr.length;i++){
                    var arr = {};
                    arr.num = timeArr[i];
                    arr.index = i;
                    dateArr.push(arr)
                }
                // console.log(dateArr)
                for(var i=0;i<dateArr.length;i++) {
                    dateArr[i].index = i;
                    this.animationNum('.active' + dateArr[i].index,dateArr[i].num,dateArr,null,false)
                }
        },
        filterMonth(value) {
            if(String(value).length == 1) {
                return '0' + value;
            }else {
                return value;
            }
        },
        animationNum(target,num,dateArr,index,isInterval) {

            // console.log(target,num,dateArr,index,isInterval)

            var that = this;
            this.$nextTick(()=>{

                var nextNum = index !== null?Number(this.num[index].num):0;
                var isAuto = index !== null?Number(this.num[index].num):0;
                var animationTime;

                if(nextNum == 0) {
                    animationTime = (10 - num) * 1.8;
                }else {
                    animationTime = nextNum * 1.8;
                }

                var backRotate = 180;
                var nextRotate = 0;
                
                var back = document.querySelector( target + ' .backTop')
                var backHTML = document.querySelector( target + ' .backTop .inner')
                var just = document.querySelector( target + ' .justTop')
                var next = document.querySelector( target + ' .next')
                var bottom = document.querySelector( target + ' .bottom .top')
                var bottom2 = document.querySelector( target + ' .bottom .bot')
            
                autoFunction()
                
                function autoFunction() {
                    
                    var time = setInterval(()=>{

                            backRotate += 5;
                            nextRotate += 5;

                            back.style.transform = 'rotateX('+ -backRotate +'deg)'
                            next.style.transform = 'rotateX('+ -nextRotate +'deg)'

                            if( nextRotate % 360 == 5 ) {
                                
                                if(isAuto > 9) {
                                    isAuto = 0;
                                }
                                if(isAuto == Number(num)) {
                                    clearInterval(time)
                                }else {
                                    isAuto++
                                }

                            }else if( nextRotate % 360 == 50 ) {

                                if(nextNum > 9) {
                                    nextNum = 0;
                                }
                                if(nextNum == Number(num)) {
                                    clearInterval(time)
                                }else {
                                    nextNum++
                                }
                                if(nextNum == 10) {
                                    nextNum = 0;
                                }
                                just.innerHTML = nextNum;
                                backHTML.innerHTML = nextNum;

                            }else if( nextRotate % 360 == 130 ) {

                                bottom.innerHTML = nextNum;
                                bottom2.innerHTML = nextNum;
                                next.innerHTML = nextNum;

                            }else if( nextRotate % 360 == 180 ) {
                                
                                clearInterval(time)
                                backRotate = 180;
                                nextRotate = 0;
                                autoFunction()

                            }

                        if(num == 0 && isInterval){
                            
                            if(isAuto != 0) {
                                isAuto = 10 - isAuto;
                            }
                            
                            backRotate += 5;
                            nextRotate += 5;

                            back.style.transform = 'rotateX('+ -backRotate +'deg)'
                            next.style.transform = 'rotateX('+ -nextRotate +'deg)'
                            
                            if( nextRotate % 360 == 5 ) {

                                if(nextNum < 10) {
                                    isAuto++;
                                }else {
                                    clearInterval(time)
                                }

                            }else if( nextRotate % 360 == 50 ) {

                                nextNum++
                                if(nextNum >= 10 ) {
                                    just.innerHTML = 0;
                                    backHTML.innerHTML = 0;
                                }else {
                                    just.innerHTML = nextNum;
                                    backHTML.innerHTML = nextNum;
                                }
                                
                            }else if( nextRotate % 360 == 130 ) {

                                if(nextNum >= 10 ) {
                                    bottom.innerHTML = 0;
                                    bottom2.innerHTML = 0;
                                    next.innerHTML = 0;
                                }else {
                                    bottom.innerHTML = nextNum;
                                    bottom2.innerHTML = nextNum;
                                    next.innerHTML = nextNum;
                                }
                                
                            }else if( nextRotate % 360 == 180 ) {
                                
                                clearInterval(time)
                                backRotate = 180;
                                nextRotate = 0;
                                autoFunction()

                            }

                        }
                        
                    },animationTime)
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
.headers-img {
    height: calc(100vh - 125px);
    position: relative;
    overflow: hidden;
    img {
        transform: rotate(180deg);
        width: 100%;
        height: 100%;
    }
    .autoWrap {
        position: absolute;
        top: 0;
        left: 0;
    }
}
ul {
    float:left;
    margin:0;
    padding:0;
    .moneyCode {
        font-size:32px;
        font-weight:100;
        .bottom {
            .top {
                border: 3px solid #09b1f0;
                border-radius: 0 0 5px 5px;
                border-bottom:0;
                line-height:130%;
            }
            .bot {
                line-height:12%;
            }
        }
    }
    li {
        float: left;
        margin: 0 1px;
        width: 36px;
        height: 45px;
        list-style: none;
        position: relative;
        font: 700 2.5rem/150px "微软雅黑";
        font-family: Arial,Helvetica,sans-serif;
        color: #e2d70c;
        text-align: center;
        perspective: 300px;
        .transition {
            transition: 1s;
        }
        div {
            width: 100%;
            height: 50%;
            overflow: hidden;
            position: absolute;
            box-sizing: border-box;
            background: #113c73;
        }
        .justTop {
            top: 0;
            line-height: 100%;
            transform-origin: bottom;
            backface-visibility: hidden;
            border: 3px solid #09b1f0;
            border-bottom: 0;
            border-radius: 0 0 5px 5px;
        }
        .next {
            top: 0;
            line-height: 100%;
            transform-origin: bottom;
            backface-visibility: hidden;
            border: 3px solid #09b1f0;
            border-bottom: 0;
            border-radius: 0 0 5px 5px;
        }
        .backTop {
            bottom: 0;
            line-height: 0;
            transform-origin: top;
            border: 3px solid #09b1f0;
            border-top: 0;
            border-radius: 5px 5px 0 0;
            div {
                height: 100%;
            }
            .mask {
                border-radius: 5px 5px 0 0;
                background: linear-gradient(#000, rgba(124, 124, 124, 0.09));
                opacity: .4;
            }
        }
        .bottom {
            top: 0;
            height: 100%;
            line-height: 100%;
            overflow: hidden;
            background: none;
            .top {
                position: absolute;
                height: 50%;
                top: 0;
                border-radius: 5px 5px 0 0;
                background: none;
            }
            .bot {
                position: absolute;
                height: 51%;
                bottom: 0;
                line-height: 10%;
                border: 3px solid #09b1f0;
                border-top: 0;
                border-radius: 5px 5px 0 0;
            }
            .mask {
                position: absolute;
                height: 51%;
                bottom: 0;
                border-radius: 5px 5px 0 0;
                background: linear-gradient(#000, rgba(124, 124, 124, 0.09));
                opacity: .4;
                border: 3px solid #09b1f0;
                border-top:0;
            }
        }
    }
    }
</style>