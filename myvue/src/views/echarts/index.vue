<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Echarts',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>