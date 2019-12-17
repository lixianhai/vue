<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :key="key">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style scope>

.child-view { 
margin: 300px auto; 
width: 100%; 
height: 100%; 
transition: all .5s cubic-bezier(.55,0,.1,1); 
} 
.slide-left-enter, .slide-right-leave-active { 
opacity: 0; 
-webkit-transform: translate(30px, 0); 
transform: translate(30px, 0); 
} 
.slide-left-leave-active, .slide-right-enter { 
opacity: 0; 
-webkit-transform: translate(-30px, 0); 
transform: translate(-30px, 0); 
}

</style>