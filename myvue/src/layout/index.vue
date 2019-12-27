<template>
  <div id="appWrap">
      <div class="leftNavBarWrap">
          <NavBar />
      </div>
      <div class="rightContentWrap">
          <div :class="{'fixed-header':fixedHeader}">
            <div class="headers_wrap">
                <div class="header_left">
                    <Breadcrumb />
                </div>
                <div class="header_right">
                    <Headers />
                </div>
            </div>
            <Tags v-if="isTagView" />
          </div>
          <div :style="{'margin-top':appMainMargin}">
              <AppMain />
              <right-panel />
          </div>
      </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import {AppMain, NavBar, Breadcrumb, Tags, Headers} from './components'

export default {
    name:'Layout',
    components: {
        AppMain,
        NavBar,
        Breadcrumb,
        Tags,
        Headers,
        RightPanel
    },
    computed: {
        fixedHeader() {
            return this.$store.state.fixedHeader
        },
        isTagView() {
            return this.$store.state.isTagView
        },
        appMainMargin() {
            if(this.fixedHeader) {
                if(this.isTagView) {
                    return '85px'
                }else{
                    return '50px'
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
#appWrap {
    .leftNavBarWrap {
        z-index: 999;
        width: 210px;   
        position: fixed;
        left: 0;
        top: 0;
    }
    .rightContentWrap {
        margin-left: 210px;
        .fixed-header {
            position: fixed;
            top: 0;
            width: calc(100% - 210px);
            z-index: 9;
        }
        .headers_wrap {
            width: 100%;
            height: 50px;
            overflow: hidden;
            position: relative;
            background: #fff;
            padding-left: 10px;
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