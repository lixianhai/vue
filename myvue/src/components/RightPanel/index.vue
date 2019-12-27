<template>
  <div ref="rightPanel" :class="{show:show}" class="rightPanel-container">
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div class="handle-button" :style="{'top':buttonTop+'px','background-color':theme}" @click="show=!show">
        <i :class="show?'el-icon-close':'el-icon-setting'" />
      </div>
      <div class="rightPanel-items">
        <div class="drawer-container">
          <h3>系统布局配置</h3>
          <div class="drawer-item">
            <span>主题色</span>
            <div class="theme-picker">
              <theme class="el-color"/>
            </div>
          </div>
          <div class="drawer-item">
            <span>开启 Tags-View</span>
            <div class="theme-picker">
              <el-switch
                v-model="TagsView"
                inactive-color="#d8dce5"
                style="margin-left:-5px;"
              >
              </el-switch>
            </div>
          </div>
          <div class="drawer-item">
            <span>固定 Header</span>
            <div class="theme-picker">
              <el-switch
                v-model="fixedHeader"
                inactive-color="#d8dce5"
                style="margin-left:-5px;"
              >
              </el-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '@/utils'
import theme from '../theme'

export default {
  components: { theme },
  name: 'RightPanel',
  props: {
    clickNotClose: {
      default: false,
      type: Boolean
    },
    buttonTop: {
      default: 250,
      type: Number
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme
    },
    TagsView: {
      get() {
        console.log(this.$store.state.isTagView)
        return this.$store.state.isTagView
      },
      set(status) {
        this.$store.dispatch('changeTagsSwitch',status)
      }
    },
    fixedHeader: {
      get() {
        return this.$store.state.fixedHeader
      },
      set(status) {
        this.$store.dispatch('changeHeaderSwitch',status)
      }
    }
  },
  watch: {
    show(value) {
      if (value && !this.clickNotClose) {
        this.addEventClick()
      }
      if (value) {
        addClass(document.body, 'showRightPanel')
      } else {
        removeClass(document.body, 'showRightPanel')
      }
    }
  },
  mounted() {
    this.insertToBody()
  },
  beforeDestroy() {
    const elx = this.$refs.rightPanel
    elx.remove()
  },
  methods: {
    addEventClick() {
      window.addEventListener('click', this.closeSidebar)
    },
    closeSidebar(evt) {
      const parent = evt.target.closest('.rightPanel')
      if (!parent) {
        this.show = false
        window.removeEventListener('click', this.closeSidebar)
      }
    },
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    }
  }
}
</script>

<style>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="less" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}

.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 40000;
}

.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);

  .rightPanel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
}

.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 0;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
  i {
    font-size: 24px;
    line-height: 48px;
  }
}
.drawer-container {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    h3 {
      margin-bottom: 12px;
      color: rgba(0,0,0,.85);
      font-size: 14px;
      line-height: 22px;
    }
    .drawer-item {
      color: rgba(0,0,0,.65);
      font-size: 14px;
      padding: 12px 0;
      .theme-picker {
        width: 20px;
        height: 20px;
        float: right;
        border-radius: 5px;
        padding: 3px;
        margin-top: -5px;
        .el-color {
          width: 100%!important;
          height: 100%!important;
          padding: 0!important;
        }
      }
    }
}

</style>
