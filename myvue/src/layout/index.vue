<template>
  <div id="appWrap">
      <div class="leftNavBarWrap">
          <NavBar />
      </div>
      <div class="rightContentWrap">
          <div class="headers_wrap">
            <div class="header_left">
                <Breadcrumb />
            </div>
             <div class="header_right">
                 <Headers />
             </div>
          </div>
          <div>
              <Tags />
          </div>
          <div>
              <AppMain />
          </div>
      </div>
  </div>
</template>

<script>
import {AppMain, NavBar, Breadcrumb, Tags, Headers} from './components'
export default {
    name:'Layout',
    components: {
        AppMain,
        NavBar,
        Breadcrumb,
        Tags,
        Headers
    }
}
</script>

<style scoped lang="less">
#appWrap {
    .leftNavBarWrap {
        width: 210px;   
        position: fixed;
        left: 0;
        top: 0;
    }
    .rightContentWrap {
        margin-left: 210px;
        .headers_wrap {
            height: 50px;
            overflow: hidden;
            position: relative;
            background: #fff;
            -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
            box-shadow: 0 1px 4px rgba(0,21,41,.08);
            .header_left {
                float: left;
                height: 100%;
                line-height: 50px;
            }
            .header_right {
                float: right;
                height: 100%;
            }
        }
    }
}

</style>