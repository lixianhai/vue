<template>
  <div>
    <component :is="currentRole" />
  </div>
</template>

<script>

import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  created() {
    console.log(this.roles)
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  },
  computed: {
    roles() {
      return this.$store.state.user.roles
    }
  },
}
</script>
