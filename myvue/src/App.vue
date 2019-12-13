<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,#app,body {
  height: 100%;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
</style>
