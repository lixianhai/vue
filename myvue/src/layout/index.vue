<template>
  <div id="appWrap">
      <div class="leftNavBarWrap">
          <navBar />
      </div>
      <div class="rightContentWrap">
          <div>
              <breadcrumb />
          </div>
          <div>
              <tags />
          </div>
          <div class="p-20">
              <appMain />
          </div>
      </div>
  </div>
</template>

<script>
import {appMain, navBar, breadcrumb, tags} from './components'
export default {
    name:'Layout',
    components: {
        appMain,
        navBar,
        breadcrumb,
        tags
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
        .p-20 {
            padding: 20px;
        }
    }
}

</style>